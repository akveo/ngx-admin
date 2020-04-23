const _ = require('lodash');
const fs = require('fs');
const Colors = require('colors.js');

class Prop {
  public name: string;
  public value: any = null;
  public parents: any[] = [];
  public childs: any[] = [];

  constructor(name) {
    this.name = name;
  };
}

class PropLink {
  public theme: any;
  public prop: any;

  constructor(theme, prop) {
    this.theme = theme;
    this.prop = prop;
  }
}

const exporter = {
  get_value(a) {
    let value, i;
    switch (a.constructor.name) {
      case 'SassList':
        value = [];
        for (i = 0; i < a.getLength(); i++) {
          value.push(exporter.get_value(a.getValue(i)));
        }
        break;
      case 'SassMap':
        value = {};
        for (i = 0; i < a.getLength(); i++) {
          value[a.getKey(i).getValue()] = exporter.get_value(a.getValue(i));
        }
        break;
      case 'SassColor':
        if (1 === a.getA()) {
          value = Colors.rgb2hex(a.getR(), a.getG(), a.getB());
        } else {
          value = 'rgba(' + a.getR() + ', ' + a.getG() + ', ' + a.getB() + ', ' + a.getA() + ')';
        }
        break;
      case 'SassNumber':
        value = a.getValue();
        if (a.getUnit()) {
          value += a.getUnit();
        }
        break;
      case 'SassNull':
        value = null;
        break;
      default:
        value = a.getValue();
    }
    return value;
  },

  parseThemes(THEMES) {
    let result = {};

    Object.keys(THEMES).forEach((themeName) => {
      result[themeName] = result[themeName] ? result[themeName] : {};
      result[themeName].data = result[themeName].data ? result[themeName].data : {};
      result[themeName].name = themeName;
      result[themeName].parent = THEMES[themeName].parent;
      const theme = THEMES[themeName].data;

      Object.keys(theme).forEach((prop) => {
        result[themeName].data[prop] = result[themeName].data[prop] ? result[themeName].data[prop] : new Prop(prop);
        result = exporter.getParent(prop, themeName, themeName, prop, result, THEMES);
      });
    });

    return result;
  },

  getParent(prop, scopedThemeName, resultThemeName, resultProp, resultObj, THEMES) {
    const scopedTheme = THEMES[scopedThemeName].data;
    const scopedParent = THEMES[scopedThemeName].parent;
    const value = scopedTheme[prop];
    if (typeof value === 'string' && scopedTheme[value]) {
      if (resultObj[resultThemeName].data[resultProp].parents.length === 0) {
        exporter.linkProps(resultObj, scopedThemeName, value, resultThemeName, prop);
      } else {
        resultObj[resultThemeName].data[resultProp].parents.push(new PropLink(scopedThemeName, value));
      }
      exporter.getParent(value, scopedThemeName, resultThemeName, resultProp, resultObj, THEMES);
    } else {
      resultObj[resultThemeName].data[resultProp].value = value;
      if (scopedParent && THEMES[scopedParent].data[prop] === value) {
        if (resultObj[resultThemeName].data[resultProp].parents.length === 0) {
          exporter.linkProps(resultObj, scopedParent, prop, resultThemeName, prop)
        } else {
          resultObj[resultThemeName].data[resultProp].parents.push(new PropLink(scopedParent, prop));
        }
      }
    }
    return resultObj;
  },


  linkProps(resultObj, parentThemeName, parentPropName, childThemeName, childPropName) {
    if (!resultObj.hasOwnProperty(parentThemeName)) {
      resultObj[parentThemeName].data = {};
      resultObj[parentThemeName].data[parentPropName] = new Prop(parentPropName);
    } else if (!resultObj[parentThemeName].data.hasOwnProperty(parentPropName)) {
      resultObj[parentThemeName].data[parentPropName] = new Prop(parentPropName);
    }
    resultObj[childThemeName].data[childPropName].parents.push(new PropLink(parentThemeName, parentPropName));
    resultObj[parentThemeName].data[parentPropName].childs.push(new PropLink(childThemeName, childPropName));
    return resultObj;
  },


  function(path) {
    return function (file, themes, mapping) {
      const themesValue = exporter.get_value(themes);
      const mappingValue = exporter.get_value(mapping);

      const completeThemes = {};
      Object.keys(themesValue).forEach((themeName) => {
        const theme = themesValue[themeName];
        completeThemes[themeName] = {
          ...theme,
          data: _.defaults(mappingValue, theme.data),
        };
      });


      let output = {
        themes: exporter.parseThemes(themesValue),
        // TODO: we need to change internal function interface as it very hard to re-use them
        completeThemes: exporter.parseThemes(completeThemes),
      };

      output = _.defaults(JSON.parse(fs.readFileSync(path + '/' + file.getValue())), output);
      fs.writeFileSync(path + '/' + file.getValue(), JSON.stringify(output, null, '  '));
      return themes;
    }
  },

  interface(name) {
    name = name || 'export';
    return name + '($file, $themes, $mapping)';
  },
};

export function exportThemes(path, name) {
  const out = {};
  out[exporter.interface(name)] = exporter.function(path);
  return out;
}

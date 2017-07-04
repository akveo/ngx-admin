# TODO
 - rewrite theme and styles parts to include info about the variables
 - RXJS import
 - steps to start the development
 - describe framework and demo dependencies
 - redo block about overrides
 
# MUST!
- Use tslint, styles-lint
- Use default angular view encapsulation
- Try to use changeDetection: ChangeDetectionStrategy.OnPush
- Never forget typedoc comments
- Do tests
- Create playground page per each new component/feature


# NEW Feature checklist
- lint checks are passing
- tests are added/updated
- showcase in the playground updated
- demo updated
- SCSS variables added/updated
- tsdocs added/updated
- commit message is properly formatted
- for override - registered in a list of overrides
- component *.theme registered in a list of component themes
- looks great on all default themes
- takes into account `inverse` feature
- requires approval from several core team contributors


# Framework Structure

- src
    - app - Components playground, used for components development showcase, also covered with UI tests
    - backend - Small backend example to run UI tests for @nga/auth 
    - framework - Framework itself, divided into npm packages
        - auth - `@nga/auth` npm package, auth package (login, register, etc)
        - theme - `@nga/theme` npm package, main framework package
      
      
# Auth // TODO      

# Theme
Theme module is a main framework module, consisting from custom UI Kit components (layout, cards, tabs, etc), css-themes support and appearance overrides for 3rd party libraries.

## UI Kit structure 

Located in `theme/components`.
Each component consists of standart angular component structure + `*.theme.scss` file, which is a customizable part of component's styles.

## Services

Located in `theme/services`.
Global theme services. 

## Styles structure

Located in `theme/styles`

- core - Mixins and functions
- themes - Built-in themes
    - default - Default theme
        - theme.scss - resulting theme file
        - variables.scss - theme variables
    - light - Another theme
    - theming.scss - connects all component `*.theme` files, global styles and all overrides.
- components.scss - imports all components themes
- globals.scss - all global styles   

### CSS Themes

- Problem
  Customizable themes support doesn't work good with angular, as encapsulated in framework styles can't access user app variables.
  Thus, we need to ask a user to include framework styles separately as global styles, so that it is possible to change SASS variables before the theme styles are processed.
  
- Solution
  Solution is to divide component styles into configurable (with SASS variables) and non-configurable (hardcoded).
  Then place hardcoded styles into `*.component.scss`, and configurable styles into `*.theme.scss`.
  The `*.theme` files will be included into one `*theme` file with access to default theme variables. This files has to be included by the user into their project.
  
- Disadvantages
    - We separate styles, thus it's hard to read the styles in the development mode.
    - Theme styles are not encapsulated.
  
- Possible future solution
    - CSS variables
  
  
### Multi Themes

- Problem
  We cannot change SCSS variables in the runtime as user change the theme (possible with CSS varibles but browser support is very limited). 
  
- Solution
  Thus, we need to build multiple instances of styles in the runtime and encapsulate each theme's bunch of styles under some .theme-name class:
   ```
    .nga-theme-default {
      nga-layout {
        color: black;
      }
    }
    .nga-theme-red {
      nga-layout {
        color: red;
      }
    }
    
   ```
  Then, changing css class on some root element (nga-layout) we can change the page appearance in the runtime.

- Disadvantages
  - Double (triple, etc) size of generated css file. 

- Possible future solution
  - CSS variables

## Overrides

Located in `theme/overrides`.
Consists of a list of override modules (module here - is a group of 3rd party components).
Each module consists of:

 - *.module.ts module file which imports and exports 3rd party modules.
 - styles - folder with 3rd party components` styles overrides.
    - *.theme.scss - component theme override file


- Problem
  Theme also provides custom appearance for 3rd party libraries and frameworks, like bootstrap. We need to customize their styles in order to change their look and feel.
  
- Solution
  Override file per library. Override files are included in the resulting `theme.scss` file.
      
## JS Themes - // TODO


## Documentation
Documentation is generated with custom generator built on top of @nga/theme :)

## Release

To start a new release (publish the framework packages no NPM) you need:

1. npm run release:prepare - this will create ready for publishing packages in src/.lib
2. npm run release:validate - this will build prod & AOT builds of the playground app using prepared packages in src/.lib and run e2e tests again it.
3. MANUALLY update a version in main ./package.json to a new one
4. release:
  * make sure you are logged in as corresponding NPM user
  * npm run release - will update all package.json's, run prepare & validate and finally publish the packages to NPM

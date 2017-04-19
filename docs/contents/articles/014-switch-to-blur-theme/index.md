---
title: Enabling blur theme
author: kd
sort: 850
group: Customization
template: article.jade
---

If you want to switch theme to the blur, you need to follow 3 simple steps:

1) Blur color scheme needs some javascript to calculate initial background offsets for panels.
That's why we need to tell the system that we want to use blur theme by specifying this in `src/app/theme/theme.config.ts`:
```javascript
  this._baConfig.changeTheme({name: 'blur'});
```
<br><br>

2) Also you need to change some colors. 
For our blur theme we use the following configuration in `src/app/theme/theme.config.ts`:
```javascript
  let colorScheme = {
    primary: '#209e91',
    info: '#2dacd1',
    success: '#90b900',
    warning: '#dfb81c',
    danger: '#e85656',
  };
  this._baConfig.changeColors({
    default: '#4e4e55',
    defaultText: '#e2e2e2',
    border: '#dddddd',
    borderDark: '#aaaaaa',

    primary: colorScheme.primary,
    info: colorScheme.info,
    success: colorScheme.success,
    warning: colorScheme.warning,
    danger: colorScheme.danger,

    primaryLight: ColorHelper.tint(colorScheme.primary, 30),
    infoLight: ColorHelper.tint(colorScheme.info, 30),
    successLight: ColorHelper.tint(colorScheme.success, 30),
    warningLight: ColorHelper.tint(colorScheme.warning, 30),
    dangerLight: ColorHelper.tint(colorScheme.danger, 30),

    primaryDark: ColorHelper.shade(colorScheme.primary, 15),
    infoDark: ColorHelper.shade(colorScheme.info, 15),
    successDark: ColorHelper.shade(colorScheme.success, 15),
    warningDark: ColorHelper.shade(colorScheme.warning, 15),
    dangerDark: ColorHelper.shade(colorScheme.danger, 15),

    dashboard: {
      blueStone: '#005562',
      surfieGreen: '#0e8174',
      silverTree: '#6eba8c',
      gossip: '#b9f2a1',
      white: '#10c4b5',
    },
  });
```
<br><br>

3) CSS should also be recompiled. 
Before running build command, switch to *blur* color profile.
To do so replace theme in `src/app/theme/sass/conf/conf.scss`:
 
```scss
@import 'colorSchemes/ng2';
```
 
to
 
```scss
@import 'colorSchemes/blur';
```

Additionaly, if you would like to use some different background, replace the following images:

- `src/assets/img/blur-bg.jpg` (main background image)
- `src/assets/img/blur-bg-blurred.jpg` (blurred background image used on panels)

We suggest using 10px Gaussian blur to blur an original image.

<br><br>
That's it! You have successfully blurred your theme! Run `npm start` and check it out.

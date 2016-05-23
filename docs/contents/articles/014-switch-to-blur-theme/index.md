---
title: Enabling blur theme
author: kd
sort: 850
group: Customization
template: article.jade
---

If you want to switch theme to the blur, you need to follow 3 simple steps:

1) Blur theme needs some javascript to calculate initial background offsets for panels.
That's why first thing you need to do is enable that code.
This should be done in Angular **configuration block**. 
For example you can add following lines to `src/app/theme/theme.config.js`:
```javascript
  baConfigProvider.changeTheme({blur: true});
```

2) As well you need to change some colors. 
For example *Mint*'s default gray text color doesn't look good on blurred panels.
For our blur theme we use following configuration:
```javascript
  baConfigProvider.changeColors({
    default: 'rgba(#000000, 0.2)',
    defaultText: '#ffffff',
    dashboard: {
      white: '#ffffff',
    },
  });
```
3) CSS should also be recompiled. 
Before running build command, we suggest you to switch to *blur* color profile.
To do this replace theme in file `src/sass/theme/common.scss`:

 
```scss
@import 'theme/conf/colorScheme/mint';
```
 
to
 
```scss
@import 'theme/conf/colorScheme/blur';
```

3.1) If you would like to use some different background, replace following images:

- `src/app/assets/img/blur-bg.jpg` (main background image)
- `src/app/assets/img/blur-bg-blurred.jpg` (blurred background image used on panels)

We suggest using 10px Gaussian blur to blur original image.

_________________________________________ 
That's it! You have successfully blurred your theme! Run `gulp serve` and check it out.
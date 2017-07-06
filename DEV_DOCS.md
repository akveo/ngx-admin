# TODO
 - RXJS import
 - steps to start the development
 - describe framework and demo dependencies
 - create a new component guide
 - usage guide
 
# MUST!
- Don’t overcomplicate
- Don’t make things too abstract
- Use tslint, styles-lint
- Use lifecycle interfaces
- Use default angular view encapsulation
- Try to use changeDetection: ChangeDetectionStrategy.OnPush
- Never forget typedoc comments
- Do tests
- Create playground page per each new component/feature


# NEW Feature Checklist
- lint checks are passing
- tests are added/updated
- showcase in the playground updated
- demo updated
- SCSS variables added/updated
- tsdocs added/updated
- commit message is properly formatted
- for the override - registered in a list of overrides
- component *.theme registered in a list of component themes
- looks great on all default themes
- takes into account `inverse` feature
- requires approval from several core team contributors

# Objectives
The main aim of the project is to create a second version of ng2-admin called ngx-admin which will fix all the architecture issues of the current version:

  - make it modular
  - publish it npm on package
  - customizable color themes with HOT reload support
  - create a library of custom layout components
  - expanded documentation and guides
  - replace ng2-bootstrap with ng-bootstrap
  - get rid of jQuery
  - follow Angular code style
  - use Angular CLI


# Framework Structure

- src
    - app - Components playground, used for components development showcase, also covered with UI tests
    - docs - Documentation and framework website built on top on the framework
    - backend - Small backend example to run UI tests for @nga/auth 
    - framework - Framework itself, divided into npm packages
        - theme - `@nga/theme` npm package, main framework package
        - auth - `@nga/auth` npm package, auth package (login, register, etc)       
      
      
# Auth // TODO      

# Theme
Theme module is the main framework module, consisting of:
 
  - custom UI Kit components (layout, cards, tabs, etc)
  - css-themes with hot reload support 
  - appearance overrides for 3rd party libraries.

## UI Kit structure 

Located in `theme/components`.
Each component consists of the standard angular component structure + `*.theme.scss` file, which is a customizable part (customizable here means dependable on a specific theme variables) of component's styles.

## Services

Located in `theme/services`.
Global theme services.

## Styles structure

Located in `theme/styles`

- core/ - Common mixins and functions
- global/ - Root of the 3rd party components overrides and other global styles
- themes/ - built-in themes
- all.scss - exports all themes' variables, theming engine and global styles
- components.scss - exports all themes' variables and theming engine but DOES NOT export global styles (should be used in a component)
- globals.scss - exports all global styles (overrides, components' `*.theme.scss` themes, fonts, etc)
- themes.scss - all built-in themes
- theming.scss - themesation engine 

### CSS Themes

- Problem
  Customizable themes support doesn't work good with angular, as encapsulated in framework components' styles can't access user app variables unless you make them non-encapsulated and export as scss-files).
  Thus, we need to ask a user to include the framework styles separately as global styles, so that it is possible to change SASS variables before the theme styles are processed.
  
- Solution
  The solution is to separate component's styles into configurable (with SASS variables) and non-configurable (hardcoded) styles.
  Then place hardcoded styles into `*.component.scss`, and dynamic styles into `*.theme.scss`.
  The `*.theme` files will be included into one `*theme` file with access to the theme variables. This file has to be included by the user into their project.
  
- Disadvantages
    - We separate styles, thus it's hard to read the styles in the development mode.
    - Theme styles are not encapsulated, basically are global styles.
  
- Possible future solution
    - CSS variables (currently lack of browsers support)
 
  
### Multi Themes

- Problem
  We cannot change SCSS variables in the runtime as user change the theme (possible with CSS variables but browser support is quite limited). 
  
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
  Then, by changing a css class on the root element (nga-layout) we can change the page appearance in the runtime.
  
  - SCSS MAP
    Moreover, to have an arbitrary amount of themes we need to store the variables as an `SCSS `.
    Then, each component' styles (user components' styles) needs to be wrapped into `nga-install-component` mixing, 
    which will be called in a loop for each theme, setting its own variables.
    Variables then accessible through `nga-theme(var-name)` function.
    Finally, example of such component will look like:
    ```
      @import '@nga/theme/styles/component';
      
      @include nga-install-component() {
        div {
          color: nga-theme(primary-fg);
        }
      }
    ```
    
- Disadvantages
  - Double (triple, multiple) sizes of generated css file. 

- Possible future solution
  - CSS variables


// TODO: create and use custom themes
      
## JS Themes - // TODO

TBD

## Documentation
Documentation is generated by the custom generator built on top of @nga/theme.

## Release

To start a new release (publish the framework packages on NPM) you need:

1. npm run release:prepare - this will create ready for publishing packages in src/.lib
2. npm run release:validate - this will build prod & AOT builds of the playground app using prepared packages in src/.lib and run e2e tests again it.
3. MANUALLY update a version in main ./package.json to a new one
4. release:
  * make sure you are logged in as corresponding NPM user
  * npm run release - will update all package.json's, run prepare & validate and finally publish the packages to NPM

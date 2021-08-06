# Change Current Theme

Nebular Theme System provides 3 color schemes out of the box - `default`, `corporate` and `cosmic`. It is both possible to change the theme statically and dynamically during the runtime.


## Switch from Cosmic to Default
It is extremely simple to replace a theme from one to another.
All you need to do is to find your `NbThemeModule.forRoot` declaration and change a value of the `name` setting:

```ts
  @NgModule({
    imports: [
      // ...
      NbThemeModule.forRoot({ name: 'default' }),
    ],
  }
```
<hr>

## Runtime Theme Switch
In case you want to have a better control when a theme is changed, or for instance need to change it based on a user role,
it is possible to dynamically tell Nebular which theme should be enabled. 
`NbThemeService` is our friend in this case and particularly the `changeTheme` method:

```ts

  // ...
  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('corporate');
  }

```
<hr>

## Listen to Theme Change
And of course it is possible to subscribe to an event when the current theme gets changed so that you can adjust something in your code accordingly:

```ts

  // ...
  constructor(private themeService: NbThemeService) {
  
    this.themeService.onThemeChange()
          .subscribe((theme: any) => {
            console.log(`Theme changed to ${theme.name}`);
          });
  }

```
<hr>

## Related Articles

- [Theme System](docs/guides/theme-system)

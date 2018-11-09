export const breadcrumbsConfig = {

  // The Home link in breadcrumbs
  prefix: 'Home',

  // Replace route name with a friendly name
  names: [
    {route: '/pages/ui-features', name: 'UI Features'},
  ],

  // Replace route regular expression with a friendly name
  regexNames: [
    // {route: '', name: ''},
  ],

  // Hide route from breadcrumbs trail
  hide: [
    {route: '/pages'},
  ],

  // Hide route regular expression from breadcrumbs trail
  regexHide: [
    // {route: ''},
  ],

  // Remove the breadcrumbs component on these routes
  noBreadcrumbs: [
    {route: '/pages/dashboard'},
  ],

  // Remove the breadcrumbs component on these routes regular expression
  regexNoBreadcrumbs: [
    // {route: ''},
  ],
};

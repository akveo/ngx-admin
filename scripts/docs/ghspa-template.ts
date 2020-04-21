import { Version } from './build-docs';

function removeTrailingSlash(path: string): string {
  if (path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
}

export function generateGithubSpaScript(versionsToRedirect: Version[]): string {
  const paths: string[] = versionsToRedirect.map(v => v.path).map(removeTrailingSlash);

  return `
/**
 *
 *  ____ _ ___ _  _ _  _ ___     ___  ____ ____ ____ ____    ____ ___  ____
 *  | __ |  |  |__| |  | |__]    |__] |__| | __ |___ [__     [__  |__] |__|
 *  |__] |  |  |  | |__| |__]    |    |  | |__] |___ ___]    ___] |    |  |
 *
 *  Easy way to enable Single Page Applications for GitHub Pages
 *
 *  This project was released under MIT license.
 *
 *  @link      https://github.com/rafrex/spa-github-pages
 *  @author    Rafael Pedicini <code@rafrex.com>
 *  @link      http://websemantics.ca
 *  @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 *
 *  @param {Object} l, the document current location
 *  @param {Boolean} projectPages, true by default, https://help.github.com/articles/user-organization-and-project-pages
 *
 */

;(function(l) {

  var redirectPath;
  ${JSON.stringify(paths)}.forEach(function (path) {
    if (l.pathname.indexOf(path) === 0) {
      redirectPath = path;
    }
  });

  if (!redirectPath) {
    return;
  }

  /* redirect all 404 traffic to index.html */
  function redirect() {
    l.replace(l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + redirectPath + '/?' +
      (l.pathname ? 'p=' + l.pathname.replace(/&/g, '~and~').replace(redirectPath, '') : '') +
      (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      (l.hash))
  }

  /* resolve 404 redirects into internal routes */
  function resolve() {
    if (l.search) {
      var q = {};
      l.search.slice(1).split('&').forEach(function(v) {
        var a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&')
      });
      if (q.p !== undefined) {
        window.history.replaceState(null, null,
          redirectPath + (q.p || '') +
          (q.q ? ('?' + q.q) : '') +
          l.hash
        )
      }
    }
  }

  /* if current document is 404 page page, redirect to index.html otherwise resolve */
  document.title === '404' ? redirect() : resolve()

}(window.location));
`;
}

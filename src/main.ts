/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
var params = {},
  queryString = location.hash.substring(1),
  regex = /([^&=]+)=([^&]*)/g,
  m;
while (m = regex.exec(queryString)) {
  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
// And send the token over to the server
var req = new XMLHttpRequest();
// consider using POST so query isn't logged
var query = 'https://' + window.location.host + '?' + queryString;
// console.log(query);
req.open('GET', query, true);
if (params['id_token'] !== null && params['id_token'] !== undefined) {
  window.localStorage.setItem('access_token', params['access_token']);
  window.localStorage.setItem('id_token', params['id_token']);
  window.localStorage.setItem('state', params['state']);
}else {
  window.localStorage.clear();
}
req.onreadystatechange = function (e) {
  if (req.readyState === 4) {
    if (req.status === 200) {
      // window.location = params.state;
    } else if (req.status === 400) {
      window.alert('There was an error processing the token.');
    } else {
      // alert('something else other than 200 was returned');
      // console.log(req);
    }
  }
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

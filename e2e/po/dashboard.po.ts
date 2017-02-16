import { browser } from 'protractor';
import { disableTransition } from '../helpers/disableTransition';

export class Dashboard {
  navigateTo() {
    return browser.get('/');
  };
  disableCss(){
    return browser.executeScript(disableTransition);
  };
};

import { browser, ExpectedConditions } from 'protractor';

const EC = ExpectedConditions;
const defaultTimeout = 30000;

export const hasClass = (el: any, cls: string) => {
  return el.getAttribute('class').then((classes: string) => {
    return classes.split(' ').indexOf(cls) !== -1;
  });
};

export const clickByElement = (el: any) => {
  return browser.executeScript("arguments[0].scrollIntoView();",
    el.getWebElement())
    .then(() => browser.wait(EC.visibilityOf(el), defaultTimeout))
    .then(() => browser.wait(EC.elementToBeClickable(el), defaultTimeout))
    .then(() => el.click());
};
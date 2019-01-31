import { browser, ExpectedConditions } from 'protractor';
import { BasePage } from '../page-objects/base-page';
import { clickByElement, hasClass } from '../helper';
import { urls } from '../data/test-urls';

let basePage = new BasePage();
const EC = ExpectedConditions;
const defaultTimeout = 30000;

describe('Menu: ', () => {

  beforeAll((done) => {
    browser.ignoreSynchronization = true;
    browser.get(browser.baseUrl)
      .then(() => done())
  });

  it('Toggle menu', (done) => {
    clickByElement(basePage.burgerButton)
      .then(() => browser.wait(EC.visibilityOf(basePage.collapsedMenu), defaultTimeout))
      .then(() => clickByElement(basePage.burgerButton))
      .then(() => browser.wait(EC.visibilityOf(basePage.expandedMenu), defaultTimeout))
      .then(() => done());
  });

  it('IoT Dashboard button ', (done) => {
    testButtonOnMenu(basePage.iotDashboardButton, urls.iotDashboard)
      .then(() => done());
  });

  it('E-commerce button ', (done) => {
    testButtonOnMenu(basePage.ecommerceButton, urls.ecommerce)
      .then(() => done());
  });

  describe('Extra Components buttons: ', () => {
    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.extraComponentsButton))
        .then(() => done());
    });

    it('Calendar button', (done) => {
      testButtonOnMenu(basePage.calendarButton, urls.extraComponents.calendar)
        .then(() => done())
    });

    it('Stepper button', (done) => {
      testButtonOnMenu(basePage.stepperButton, urls.extraComponents.stepper)
        .then(() => done())
    });

    it('List button', (done) => {
      testButtonOnMenu(basePage.listButton, urls.extraComponents.list)
        .then(() => done())
    });

    it('Infinite List button', (done) => {
      testButtonOnMenu(basePage.infiniteListButton, urls.extraComponents.infiniteList)
        .then(() => done())
    });

    it('Accordion button', (done) => {
      testButtonOnMenu(basePage.accordionButton, urls.extraComponents.accordion)
        .then(() => done())
    });

    it('Progress Bar button', (done) => {
      testButtonOnMenu(basePage.progressBarButton, urls.extraComponents.progressBar)
        .then(() => done())
    });

    it('Spinner button', (done) => {
      testButtonOnMenu(basePage.spinnerButton, urls.extraComponents.spinner)
        .then(() => done())
    });

    it('Alert button', (done) => {
      testButtonOnMenu(basePage.alertButton, urls.extraComponents.alert)
        .then(() => done())
    });

    it('Tree button', (done) => {
      testButtonOnMenu(basePage.treeButton, urls.extraComponents.tree)
        .then(() => done())
    });

    it('Tabs button', (done) => {
      testButtonOnMenu(basePage.tabsButton, urls.extraComponents.tabs)
        .then(() => done())
    });

    it('Calendar Kit button', (done) => {
      testButtonOnMenu(basePage.calendarKitButton, urls.extraComponents.calendarKit)
        .then(() => done())
    });

    it('Chat button', (done) => {
      testButtonOnMenu(basePage.chatButton, urls.extraComponents.chat)
        .then(() => done())
    });

  });

  describe('Forms buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.formsButton))
        .then(() => done());
    });

    it('Form Inputs button', (done) => {
      testButtonOnMenu(basePage.formInputs1Button, urls.forms.formInputs)
        .then(() => done());
    });

    it('Form Layouts button', (done) => {
      testButtonOnMenu(basePage.formLayoutsButton, urls.forms.formLayouts)
        .then(() => done());
    });

    it('Buttons button', (done) => {
      testButtonOnMenu(basePage.buttons1Button, urls.forms.buttons)
        .then(() => done());
    });

    it('Datepicker button', (done) => {
      testButtonOnMenu(basePage.datepickerButton, urls.forms.datepicker)
        .then(() => done());
    });
  });

  describe('UI Features buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.uiFeaturesButton))
        .then(() => done());
    });

    it('Grid button', (done) => {
      testButtonOnMenu(basePage.gridButton, urls.uiFeatures.grid)
        .then(() => done());
    });

    it('Icons button', (done) => {
      testButtonOnMenu(basePage.iconsButton, urls.uiFeatures.icons)
        .then(() => done());
    });

    it('Typography button', (done) => {
      testButtonOnMenu(basePage.typographyButton, urls.uiFeatures.typography)
        .then(() => done());
    });

    it('Animated Searches button', (done) => {
      testButtonOnMenu(basePage.animatedSearchesButton, urls.uiFeatures.animatedSearches)
        .then(() => done());
    });

  });

  describe('Modal & Overlay buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.modalAndOverlaysButton))
        .then(() => done());
    });

    it('Dialog button', (done) => {
      testButtonOnMenu(basePage.dialogButton, urls.modalAndOverlays.dialog)
        .then(() => done());
    });

    it('Window button', (done) => {
      testButtonOnMenu(basePage.windowButton, urls.modalAndOverlays.window)
        .then(() => done());
    });

    it('Popover button', (done) => {
      testButtonOnMenu(basePage.popoverButton, urls.modalAndOverlays.popover)
        .then(() => done());
    });

    it('Toastr button', (done) => {
      testButtonOnMenu(basePage.toastrButton, urls.modalAndOverlays.toastr)
        .then(() => done());
    });

    it('Tooltip button', (done) => {
      testButtonOnMenu(basePage.tooltipButton, urls.modalAndOverlays.tooltip)
        .then(() => done());
    });

  });

  describe('Bootstrap buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.bootstrapButton))
        .then(() => done());
    });

    it('Form Inputs button', (done) => {
      testButtonOnMenu(basePage.formInputs2Button, urls.bootstrap.formInputs)
        .then(() => done());
    });

    it('Buttons button', (done) => {
      testButtonOnMenu(basePage.buttons2Button, urls.bootstrap.buttons)
        .then(() => done());
    });

    it('Modal button', (done) => {
      testButtonOnMenu(basePage.modalButton, urls.bootstrap.modal)
        .then(() => done());
    });

  });

  describe('Maps buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.mapsButton))
        .then(() => done());
    });

    it('Google Maps button', (done) => {
      testButtonOnMenu(basePage.googleMapsButton, urls.maps.googleMaps)
        .then(() => done());
    });

    it('Leaflet Maps button', (done) => {
      testButtonOnMenu(basePage.leafletMapsButton, urls.maps.leafletMaps)
        .then(() => done());
    });

    it('Bubble Map button', (done) => {
      testButtonOnMenu(basePage.bubbleMapsButton, urls.maps.bubbleMaps)
        .then(() => done());
    });

    it('Search Map button', (done) => {
      testButtonOnMenu(basePage.searchMapsButton, urls.maps.searchMaps)
        .then(() => done());
    });

  });

  describe('Charts buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.chartsButton))
        .then(() => done());
    });

    it('Echart button', (done) => {
      testButtonOnMenu(basePage.echartsButton, urls.charts.echarts)
        .then(() => done());
    });

    it('Chart.js button', (done) => {
      testButtonOnMenu(basePage.chartsJSButton, urls.charts.chartsJS)
        .then(() => done());
    });

    it('D3 button', (done) => {
      testButtonOnMenu(basePage.d3Button, urls.charts.d3)
        .then(() => done());
    });

  });

  describe('Editors buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.editorsButton))
        .then(() => done());
    });

    it('TinyMCE button', (done) => {
      testButtonOnMenu(basePage.tinymceButton, urls.editors.tinymce)
        .then(() => done());
    });

    it('CKEditor button', (done) => {
      testButtonOnMenu(basePage.ckeditorButton, urls.editors.ckeditor)
        .then(() => done());
    });

  });

  describe('Tables buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.tablesButton))
        .then(() => done());
    });

    it('Tables button', (done) => {
      testButtonOnMenu(basePage.smarttableButton, urls.tables.smarttable)
        .then(() => done());
    });

  });

  describe('Miscellaneous buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.miscellaneousButton))
        .then(() => done());
    });

    it('404 button', (done) => {
      testButtonOnMenu(basePage.fourOfourButton, urls.miscellaneous.fourOfour)
        .then(() => done());
    });

  });

  describe('Auth buttons: ', () => {

    beforeAll((done) => {
      browser.get(browser.baseUrl)
        .then(() => clickByElement(basePage.authButton))
        .then(() => done());
    });

    afterEach((done) => {
      clickByElement(basePage.backButton)
        .then(() => done());
    });

    it('Login button', (done) => {
      clickByElement(basePage.loginButton)
        .then(() => browser.wait(EC.urlContains(urls.auth.login), defaultTimeout))
        .then(() => done());
    });

    it('Register button', (done) => {
      clickByElement(basePage.registerButton)
        .then(() => browser.wait(EC.urlContains(urls.auth.register), defaultTimeout))
        .then(() => done());
    });

    it('Request Password button', (done) => {
      clickByElement(basePage.requestPasswordButton)
        .then(() => browser.wait(EC.urlContains(urls.auth.requestPassword), defaultTimeout))
        .then(() => done())
    });

    it('Reset password button', (done) => {
      clickByElement(basePage.resetPasswordButton)
        .then(() => browser.wait(EC.urlContains(urls.auth.resetPassword), defaultTimeout))
        .then(() => done());
    });

  });

});

function testButtonOnMenu(el: any, url: string) {

  return clickByElement(el)
    .then(() => browser.wait(EC.urlContains(url), defaultTimeout))
    .then(() => expect(hasClass(el, 'active')).toBeTruthy('Error: Element is not selected'))
}


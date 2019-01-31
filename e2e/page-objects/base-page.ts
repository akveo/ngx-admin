import { $ } from 'protractor';

export class BasePage {

    burgerButton = $('.nb-menu');
    collapsedMenu = $('.menu-sidebar.menu-sidebar.compacted');
    expandedMenu = $('.menu-sidebar.expanded');
    iotDashboardButton = $('[title="IoT Dashboard"]');
    ecommerceButton = $('[title="E-commerce"]');

    /**
     * Extra Components buttons
     */

    extraComponentsButton = $('[title="Extra Components"]');
    calendarButton = $('[title="Calendar"]');
    stepperButton = $('[title="Stepper"]');
    listButton = $('[title="List"]');
    infiniteListButton = $('[title="Infinite List"]');
    accordionButton = $('[title="Accordion"]');
    progressBarButton = $('[title="Progress Bar"]');
    spinnerButton = $('[title="Spinner"]');
    alertButton = $('[title="Alert"]');
    treeButton = $('[title="Tree"]');
    tabsButton = $('[title="Tabs"]');
    calendarKitButton = $('[title="Calendar Kit"]');
    chatButton = $('[title="Chat"]');

    /**
     * Forms buttons
     */

    formsButton = $('[title="Forms"]');
    formInputs1Button = $('[href="/pages/forms/inputs"]');
    formLayoutsButton = $('[title="Form Layouts"]');
    buttons1Button = $('[href="/pages/forms/buttons"]');
    datepickerButton = $('[title="Datepicker"]');

    /**
     * UI Features buttons
     */

    uiFeaturesButton = $('[title="UI Features"]');
    gridButton = $('[title="Grid"]');
    iconsButton = $('[title="Icons"]');
    typographyButton = $('[title="Typography"]');
    animatedSearchesButton = $('[title="Animated Searches"]');

    /**
     * Modal & Overlays buttons
     */

    modalAndOverlaysButton = $('[title="Modal & Overlays"]');
    dialogButton = $('[title="Dialog"]');
    windowButton = $('[title="Window"]');
    popoverButton = $('[title="Popover"]');
    toastrButton = $('[title="Toastr"]');
    tooltipButton = $('[title="Tooltip"]');

    /**
     * Bootstrap buttons
     */

    bootstrapButton = $('[title="Bootstrap"]');
    formInputs2Button = $('[href="/pages/bootstrap/inputs"]');
    buttons2Button = $('[href="/pages/bootstrap/buttons"]');
    modalButton = $('[title="Modal"]');

    /**
     * Maps butttons
     */

    mapsButton = $('[title="Maps"]');
    googleMapsButton = $('[title="Google Maps"]');
    leafletMapsButton = $('[title="Leaflet Maps"]');
    bubbleMapsButton = $('[title="Bubble Maps"]');
    searchMapsButton = $('[title="Search Maps"]');

    /**
     * Charts buttons
     */

    chartsButton = $('[title="Charts"]');
    echartsButton = $('[title="Echarts"]');
    chartsJSButton = $('[title="Charts.js"]');
    d3Button = $('[title="D3"]');

    /**
     * Editors buttons
     */

    editorsButton = $('[title="Editors"]');
    tinymceButton = $('[title="TinyMCE"]');
    ckeditorButton = $('[title="CKEditor"]');

    /**
     * Tables buttons
     */

    smarttableButton = $('[title="Smart Table"]');

    tablesButton = $('[title="Tables"]');

    /**
     * Miscellaneous buttons
     */

    miscellaneousButton = $('[title="Miscellaneous"]');
    fourOfourButton = $('[title="404"]');

    /**
     * Auth buttons
     */

    authButton = $('[title="Auth"]');
    loginButton = $('[title="Login"]');
    registerButton = $('[title="Register"]');
    requestPasswordButton = $('[title="Request Password"]');
    resetPasswordButton = $('[title="Reset Password"]');
    backButton = $('[aria-label="Back"]');

};
/*
 * Implementation of jQuery Toast Plugin by kamranahmedse
 * 
 * See: https://github.com/kamranahmedse/jquery-toast-plugin/
*/

import { Injectable } from '@angular/core';

// loading plugin (js and css)
import './baToastNotification.loader.ts';
// loading configuration class/interface
import { ToastConfig } from './models/ToastConfig';

@Injectable()
export class BaToastNotificationService{
    private _defaultConfig:ToastConfig;

    // setting default configuration
    constructor(){
        this._defaultConfig = {
            text: '',
            position: "bottom-right"
        }
    }

    // method to set app-wide default toast configuration
    setToastDefaults(toastConfig:ToastConfig){
        this._defaultConfig = toastConfig;
    }

    // show toast
    showToast(toastConfig:ToastConfig){
        jQuery.toast(Object.assign(this._defaultConfig, toastConfig));
    }

    // hide all toasts
    clearAllToasts(){
        jQuery.toast().reset('all');
    }
}
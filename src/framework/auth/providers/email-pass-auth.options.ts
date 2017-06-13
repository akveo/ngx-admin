/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

// TODO postfix to options
export interface NgaEmailPassModuleConfig {
  alwaysFail?: boolean;
  rememberMe?: boolean;
  endpoint?: string;
  redirect?: {
    success?: string | null;
    failure?: string | null;
  };
  defaultErrors?: string[];
  defaultMessages?: string[];
}

// TODO postfix to options
export interface NgaEmailPassResetModuleConfig extends NgaEmailPassModuleConfig {
  resetPasswordTokenKey?: string;
}

// TODO postfix to options
export interface NgEmailPassAuthProviderConfig {
  baseEndpoint?: string;
  login?: boolean | NgaEmailPassModuleConfig;
  register?: boolean | NgaEmailPassModuleConfig;
  requestPass?: boolean | NgaEmailPassModuleConfig;
  resetPass?: boolean | NgaEmailPassResetModuleConfig;
  logout?: boolean | NgaEmailPassResetModuleConfig;
  token?: {
    key?: string;
    getter?: Function;
  };
  errors?: {
    key?: string;
    getter?: Function;
  };
  messages?: {
    key?: string;
    getter?: Function;
  };
  validation?: {
    password?: {
      required?: boolean;
      minLength?: number | null;
      maxLength?: number | null;
      regexp?: string | null;
    };
    email?: {
      required?: boolean;
      regexp?: string | null;
    };
    fullName?: {
      required?: boolean;
      minLength?: number | null;
      maxLength?: number | null;
      regexp?: string | null;
    };
  };
}

export interface NgaEmailPassModuleConfig {
  alwaysFail?: boolean,
  endpoint?: string,
  redirect?: {
    success?: string | null,
    failure?: string | null,
  },
  token?: {
    key?: string,
    getter?: Function,
  },
  errors?: {
    key?: string,
    getter?: Function,
  },
  messages?: {
    key?: string,
    getter?: Function,
  },
  defaultErrors?: string[]
  defaultMessages?: string[],
}

export interface NgaEmailPassResetModuleConfig extends NgaEmailPassModuleConfig {
  resetPasswordTokenKey?: string;
}

export interface NgEmailPassAuthProviderConfig {
  login?: boolean | NgaEmailPassModuleConfig,
  register?: boolean | NgaEmailPassModuleConfig,
  requestPass?: boolean | NgaEmailPassModuleConfig,
  resetPass?: boolean | NgaEmailPassResetModuleConfig,
  logout?: boolean | NgaEmailPassResetModuleConfig,
  validation?: {
    password?: {
      required?: boolean,
      minLength?: number | null,
      maxLength?: number | null,
      regexp?: string | null,
    },
    email?: {
      required?: boolean,
      regexp?: string | null,
    },
    fullName?: {
      required?: boolean,
      minLength?: number | null,
      maxLength?: number | null,
      regexp?: string | null,
    },
  },
}

export const Config = {
    LOCAL: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
            AUTH: {
                method: 'basic',
                username: 'Administrator',
                password: 'S1st3m4s04S=Fr331P4',
            },
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        CORE_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        UBICACION_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8085/v1/',
        PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
            URL_USER_INFO: 'https://autenticacion.udistrital.edu.co/oauth2/userinfo',
            CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
            REDIRECT_URL: 'http://localhost:9000/',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email profile document',
            BUTTON_CLASS: 'btn btn-warning btn-sm',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
            SIGN_OUT_APPEND_TOKEN: 'true',
            REFRESH_TOKEN: 'https://autenticacion.udistrital.edu.co/oauth2/token',
        },
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
    },

    PROD: {
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
            URL_USER_INFO: 'https://autenticacion.udistrital.edu.co/oauth2/userinfo',
            CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
            REDIRECT_URL: 'http://localhost:9000/',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email profile document',
            BUTTON_CLASS: 'btn btn-warning btn-sm',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
            SIGN_OUT_APPEND_TOKEN: 'true',
            REFRESH_TOKEN: 'https://autenticacion.udistrital.edu.co/oauth2/token',
        },
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
    },
    PREPROD: {
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
            URL_USER_INFO: 'https://autenticacion.udistrital.edu.co/oauth2/userinfo',
            CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
            REDIRECT_URL: 'http://localhost:9000/',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email profile document',
            BUTTON_CLASS: 'btn btn-warning btn-sm',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
            SIGN_OUT_APPEND_TOKEN: 'true',
            REFRESH_TOKEN: 'https://autenticacion.udistrital.edu.co/oauth2/token',
        },
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
    },
};

export const general = {
    ENTORNO: Config.LOCAL,
};

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
        UBICACIONES_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8085/v1/',
        PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
            CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
            REDIRECT_URL: 'http://localhost:9000/',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email profile document',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
        },
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
    },

    PROD: {
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
        UBICACIONES_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8085/v1/',
        PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
            CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
            REDIRECT_URL: 'http://localhost:9000/',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email profile document',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
        },
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
    },
    PREPROD: {
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
        UBICACIONES_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8085/v1/',
        PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
            CLIENTE_ID: '8u_51nEfExxfw_KyhDF50cU1DGca',
            REDIRECT_URL: window.location.href,
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email profile document',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
        },
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
    },
};

export const GENERAL = {
    ENTORNO: Config.PREPROD,
};

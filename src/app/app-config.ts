export const Config = {
    LOCAL: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        CORE_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        UBICACIONES_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8085/v1/',
        PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        DOCUMENTO_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8094',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co:8244/authorize',
            CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'http://localhost:9000/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
        },
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
        MID_PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8095/v1/',
    },
    PREPROD: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        CORE_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        UBICACIONES_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8085/v1/',
        PERSONA_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/persona_crud/v1/',
        DOCUMENTO_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8094/v1/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
            CLIENTE_ID: '860WlkU_AfhfieBuquBqTx4uuAYa',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email role documento',
            REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
        },
        CONF_MENU_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8086/v1/menu_opcion_padre/ArbolMenus/',
        MID_PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8095/v1/',
    },
};

export const GENERAL = {
    ENTORNO: Config.PREPROD,
};

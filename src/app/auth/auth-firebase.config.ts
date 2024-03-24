import { NbAuthStrategyOptions, NbAuthJWTToken, NbPasswordStrategyModule, NbPasswordStrategyMessage } from "@nebular/auth";

export class NbFirebasePasswordStrategyOptions extends NbAuthStrategyOptions {
    name: string = 'email';
    token = {
      class: NbAuthJWTToken,
    };
    register?: boolean | NbPasswordStrategyModule = {
      redirect: {
        success: '/auth/login',
        failure: null,
      },
      defaultErrors: ['Something went wrong, please try again.'],
      defaultMessages: ['You have been successfully registered.'],
    };
    login?: boolean | NbPasswordStrategyModule = {
      redirect: {
        success: '/dashboard',
        failure: null,
      },
      defaultErrors: ['Login/Email combination is not correct, please try again.'],
      defaultMessages: ['You have been successfully logged in.'],
    };
    logout?: boolean | NbPasswordStrategyModule = {
      redirect: {
        success: '/',
        failure: null,
      },
      defaultErrors: ['Something went wrong, please try again.'],
      defaultMessages: ['You have been successfully logged out.'],
    };
    refreshToken?: boolean | NbPasswordStrategyModule = {
      redirect: {
        success: null,
        failure: null,
      },
      defaultErrors: ['Something went wrong, please try again.'],
      defaultMessages: ['Your token has been successfully refreshed.'],
    };
    // requestPassword?: boolean | NbPasswordStrategyModule = {
    //   redirect: {
    //     success: '/',
    //     failure: null,
    //   },
    //   defaultErrors: ['Something went wrong, please try again.'],
    //   defaultMessages: ['Reset password instructions have been sent to your email.'],
    // };
    // resetPassword?: boolean | NbPasswordStrategyModule = {
    //   redirect: {
    //     success: '/',
    //     failure: null,
    //   },
    //   defaultErrors: ['Something went wrong, please try again.'],
    //   defaultMessages: ['Your password has been successfully changed.'],
    // };
    // errors?: NbPasswordStrategyMessage = {
    //   key: 'message',
    //   getter: (module: string, res, options: NbFirebasePasswordStrategyOptions) => getDeepFromObject(
    //     res,
    //     options.errors.key,
    //     options[module].defaultErrors,
    //   ),
    // };
    // messages?: NbPasswordStrategyMessage = {
    //   key: 'messages',
    //   getter: (module: string, res, options: NbFirebasePasswordStrategyOptions) => getDeepFromObject(
    //     res.body,
    //     options.messages.key,
    //     options[module].defaultMessages,
    //   ),
    // };
  }
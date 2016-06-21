/*
 * Custom Type Definitions
 * When including 3rd party modules you also need to include the type definition for the module
 * if they don't provide one within the module. You can try to install it with typings

typings install node --save

 * If you can't find the type definition in the registry we can make an ambient definition in
 * this file for now. For example

declare module "my-module" {
  export function doesSomething(value: string): string;
}

 *
 * If you're prototying and you will fix the types later you can also declare it as type any
 *

declare var assert: any;

 *
 * If you're importing a module that uses Node.js modules which are CommonJS you need to import as
 *

import * as _ from 'lodash'

 * You can include your type definitions in this file until you create one for the typings registry
 * see https://github.com/typings/registry
 *
 */

declare var jQuery:any;
declare var GoogleMapsLoader:any;
declare var L:any;
declare var AmCharts:any;
declare var Chart:any;
declare var Chartist:any;

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var HMR: boolean;
interface GlobalEnvironment {
  ENV;
  HMR;
}

interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(dependencies?: string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}

interface WebpackRequire {
  context(file: string, flag?: boolean, exp?: RegExp): any;
}


interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}



// Extend typings
interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface NodeModule extends WebpackModule {}
interface Global extends GlobalEnvironment  {}


declare namespace Reflect {
  function decorate(decorators: ClassDecorator[], target: Function): Function;
  function decorate(
    decorators: (PropertyDecorator | MethodDecorator)[],
    target: Object,
    targetKey: string | symbol,
    descriptor?: PropertyDescriptor): PropertyDescriptor;

  function metadata(metadataKey: any, metadataValue: any): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
  };
  function defineMetadata(metadataKey: any, metadataValue: any, target: Object): void;
  function defineMetadata(
    metadataKey: any,
    metadataValue: any,
    target: Object,
    targetKey: string | symbol): void;
  function hasMetadata(metadataKey: any, target: Object): boolean;
  function hasMetadata(metadataKey: any, target: Object, targetKey: string | symbol): boolean;
  function hasOwnMetadata(metadataKey: any, target: Object): boolean;
  function hasOwnMetadata(metadataKey: any, target: Object, targetKey: string | symbol): boolean;
  function getMetadata(metadataKey: any, target: Object): any;
  function getMetadata(metadataKey: any, target: Object, targetKey: string | symbol): any;
  function getOwnMetadata(metadataKey: any, target: Object): any;
  function getOwnMetadata(metadataKey: any, target: Object, targetKey: string | symbol): any;
  function getMetadataKeys(target: Object): any[];
  function getMetadataKeys(target: Object, targetKey: string | symbol): any[];
  function getOwnMetadataKeys(target: Object): any[];
  function getOwnMetadataKeys(target: Object, targetKey: string | symbol): any[];
  function deleteMetadata(metadataKey: any, target: Object): boolean;
  function deleteMetadata(metadataKey: any, target: Object, targetKey: string | symbol): boolean;
}


// We need this here since there is a problem with Zone.js typings
interface Thenable<T> {
  then<U>(
    onFulfilled?: (value: T) => U | Thenable<U>,
    onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  then<U>(
    onFulfilled?: (value: T) => U | Thenable<U>,
    onRejected?: (error: any) => void): Thenable<U>;
  catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
}

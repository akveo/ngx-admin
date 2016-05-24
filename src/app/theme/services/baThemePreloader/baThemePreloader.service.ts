import {Injectable} from '@angular/core';

@Injectable()
export class BaThemePreloader {

  private static _loaders:Array<Promise<any>> = [];

  public static registerLoader(method:Promise<any>):void {
    BaThemePreloader._loaders.push(method);
  }

  public static clear():void {
    BaThemePreloader._loaders = [];
  }

  public static load():Promise<any> {
    return new Promise((resolve, reject) => {
      BaThemePreloader._executeAll(resolve);
    });
  }

  private static _executeAll(done:Function):void {
    setTimeout(() => {
      Promise.all(BaThemePreloader._loaders).then((values) => {
        done.call(null, values);

      }).catch((error) => {
        console.error(error);
      });
    });
  }
}

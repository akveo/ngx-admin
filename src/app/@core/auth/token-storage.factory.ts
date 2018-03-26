import { NbTokenClass, NbTokenLocalStorage } from '@nebular/auth';
import { isPlatformBrowser } from '@angular/common';

const tokenStorageMock = {
  get() {
    return {
      getValue() { return ''; },
      isValid() { return false; },
      toString() { return this.getValue(); },
    }
  },
  set() {},
  setRaw() {},
  clear() {},
};

export function tokenStorageFactory (platformId: Object, tokenClass: NbTokenClass) {
  return isPlatformBrowser(platformId)
    ? new NbTokenLocalStorage(tokenClass)
    : tokenStorageMock;
}

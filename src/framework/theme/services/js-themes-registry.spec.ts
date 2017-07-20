/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { TestBed, inject, async } from '@angular/core/testing';

import { BUILT_IN_THEMES, NgaJSTheme, NgaJSThemesRegistry } from './js-themes-registry.service';
import { ngaBuiltInJSThemesToken, ngaJSThemesToken } from '../theme.options';

describe('js-themes-registry-service', () => {
  let jsThemesRegistry: NgaJSThemesRegistry;
  const customThemes: NgaJSTheme[] = [
    {
      name: 'default',
      base: 'default',
      variables: {
        someNewValue: 'black',
        colorBg: 'yellow',
      },
    },
    {
      name: 'cosmic',
      base: 'default',
      variables: {
        someNewValueForCosmic: 'red',
      },
    },
    {
      name: 'super-new-theme',
      variables: {
        someNewValueForCosmic: 'blue',
      },
    },
  ];
  beforeEach(() => {
    // Configure testbed to prepare services
    TestBed.configureTestingModule({
      providers: [
        { provide: ngaJSThemesToken, useValue: customThemes },
        { provide: ngaBuiltInJSThemesToken, useValue: BUILT_IN_THEMES },
        NgaJSThemesRegistry,
      ],
    });
  });

// Single async inject to save references; which are used in all tests below
  beforeEach(async(inject(
    [NgaJSThemesRegistry],
    (_jsThemesRegistry) => {
      jsThemesRegistry = _jsThemesRegistry;
    },
  )));

  it('has built in themes', () => {
    expect(jsThemesRegistry.get('default')).not.toBeUndefined();
    expect(jsThemesRegistry.get('cosmic')).not.toBeUndefined();
    expect(jsThemesRegistry.get('light')).not.toBeUndefined();

    expect(jsThemesRegistry.has('default')).toBeTruthy();
    expect(jsThemesRegistry.has('cosmic')).toBeTruthy();
    expect(jsThemesRegistry.has('light')).toBeTruthy();
  });

  it('has built in themes with inherited font', () => {
    expect(jsThemesRegistry.get('default').fontMain).toEqual('Open Sans');
    expect(jsThemesRegistry.get('cosmic').fontMain).toEqual('Open Sans');
    expect(jsThemesRegistry.get('light').fontMain).toEqual('Open Sans');
  });

  it('has also new themes', () => {
    expect(jsThemesRegistry.get('super-new-theme')).not.toBeUndefined();
    expect(jsThemesRegistry.has('super-new-theme')).toBeTruthy();
    expect(jsThemesRegistry.get('super-new-theme').someNewValueForCosmic).toEqual('blue');
  });

  it('has changes from custom settings', () => {
    expect(jsThemesRegistry.get('default').colorBg).toEqual('yellow');
  });

  it('has new values from custom settings', () => {
    expect(jsThemesRegistry.get('cosmic').someNewValueForCosmic).toEqual('red');
    expect(jsThemesRegistry.get('default').someNewValue).toEqual('black');
  });
});

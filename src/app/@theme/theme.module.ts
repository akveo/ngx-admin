import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgaActionsModule,
  NgaCardModule,
  NgaLayoutModule,
  NgaMenuModule,
  NgaRouteTabsetModule,
  NgaSearchModule,
  NgaSidebarModule,
  NgaTabsetModule,
  NgaThemeModule,
  NgaUserModule,
} from '@akveo/nga-theme';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
} from './components';


import { CapitalizePipe, PluralPipe, RoundPipe } from './pipes';

import {
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const NGA_MODULES = [
  NgaCardModule,
  NgaLayoutModule,
  NgaTabsetModule,
  NgaRouteTabsetModule,
  NgaMenuModule,
  NgaUserModule,
  NgaActionsModule,
  NgaSearchModule,
  NgaSidebarModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  ThemeSettingsComponent,
  OneColumnLayoutComponent,
  TwoColumnsLayoutComponent,
  ThreeColumnsLayoutComponent,
  SampleLayoutComponent,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
];

const NGA_THEME_PROVIDERS = [
  ...NgaThemeModule.forRoot({
      name: 'cosmic',
    },
    [
      {
        name: 'default',
        base: 'default',
        variables: {
          tempColorGreen: '#7bff24',
          tempColorLightBlue: '#7bff24',
          tempColorBlue: '#7bff24',
          tempColorYellow: '#7bff24',
          tempColorOrange: '#7bff24',

          solarColorDarkGreen: '#7bff24',
          solarColorShadow: 'rgba(0, 217, 119, 0.3)',
          trafficColorBlack: '#7bff24',
          trafficTooltipBg: 'rgba(0, 255, 170, 0.35)',
          trafficLineBg: 'rgba(146, 141, 255, 0.5)',
          trafficShadowLineBg: '#7bff24',
          trafficShadowLineDarkBg: '#7bff24',
          trafficShadowLineShadow: '#7bff24',
          trafficGradFrom: '#7bff24',
          trafficGradTo: '#7bff24',

          electricityAxisColor: '#7bff24',
          electricityLineGradFrom: '#7bff24',
          electricityLineGradTo: '#7bff24',
          electricityLineShadow: '#7bff24',
          electricityAreaGradFrom: '#7bff24',
          electricityAreaGradTo: '#7bff24',

          bubbleMapTitleColor: '#333333',
          bubbleMapGeoColor1: '#e6b045',
          bubbleMapGeoColor2: '#0088ff',
          bubbleMapGeoColor3: '#ff386a',
          bubbleMapGeoColor4: '#00d977',
          bubbleMapGeoColor5: '#7659ff',
          bubbleMapGeoColor6: '#24dec8',
          bubbleMapAreaColor: '#2f3234',
          bubbleMapAreaHoverColor: '#a1a1e5',
          bubbleMapAreaBorderColor: '#dddddd',
        },
      },
      {
        name: 'cosmic',
        base: 'default',
        variables: {
          tempColorGreen: '#7bff24',
          tempColorLightBlue: '#31ffad',
          tempColorBlue: '#2ec7fe',
          tempColorYellow: '#fff024',
          tempColorOrange: '#f7bd59',

          solarColorDarkGreen: '#19977E',
          solarColorShadow: 'rgba(0, 217, 119, 0.3)',
          trafficColorBlack: '#000000',
          trafficTooltipBg: 'rgba(0, 255, 170, 0.35)',
          trafficLineBg: 'rgba(146, 141, 255, 0.5)',
          trafficShadowLineBg: '#bdbaff',
          trafficShadowLineDarkBg: '#a695ff',
          trafficShadowLineShadow: 'rgba(33, 7, 77, 0.5)',
          trafficGradFrom: 'rgba(118, 89, 255, 0.4)',
          trafficGradTo: 'rgba(164, 84, 255, 0.5)',

          electricityAxisColor: '#a1a1e5',
          electricityLineGradFrom: '#00ffaa',
          electricityLineGradTo: '#fff835',
          electricityLineShadow: 'rgba(14, 16, 48, 0.4)',
          electricityAreaGradFrom: 'rgba(188, 92, 255, 0.5)',
          electricityAreaGradTo: 'rgba(188, 92, 255, 0)',

          bubbleMapTitleColor: '#ffffff',
          bubbleMapGeoColor1: '#e6b045',
          bubbleMapGeoColor2: '#0088ff',
          bubbleMapGeoColor3: '#ff386a',
          bubbleMapGeoColor4: '#00d977',
          bubbleMapGeoColor5: '#7659ff',
          bubbleMapGeoColor6: '#24dec8',
          bubbleMapAreaColor: '#2c2961',
          bubbleMapAreaHoverColor: '#a1a1e5',
          bubbleMapAreaBorderColor: '#654ddb',
        },
      },
    ],
  ).providers,
  ...NgaSidebarModule.forRoot().providers,
  ...NgaSidebarModule.forRoot().providers,
  ...NgaMenuModule.forRoot().providers,
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...NGA_MODULES,
  ],
  exports: [
    ...BASE_MODULES,
    ...NGA_MODULES,
    ...COMPONENTS,
    ...PIPES,
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
})
export class ThemeModule {

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        ...NGA_THEME_PROVIDERS,
      ],
    };
  }
}

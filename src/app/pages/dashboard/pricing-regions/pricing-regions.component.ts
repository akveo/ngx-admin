import { Component } from '@angular/core';

interface PricingTier {
  region: string;
  flag: string;
  currency: string;
  basePrice: number;
  perVerification: number;
  volumeDiscount: string;
}

@Component({
  selector: 'ngx-pricing-regions',
  styleUrls: ['./pricing-regions.component.scss'],
  templateUrl: './pricing-regions.component.html',
})
export class PricingRegionsComponent {

  pricingTiers: PricingTier[] = [
    {
      region: 'APAC',
      flag: '🌏',
      currency: 'USD',
      basePrice: 299,
      perVerification: 0.15,
      volumeDiscount: '10% off 100k+'
    },
    {
      region: 'MENA',
      flag: '🌍',
      currency: 'USD',
      basePrice: 349,
      perVerification: 0.18,
      volumeDiscount: '15% off 150k+'
    },
    {
      region: 'Europe',
      flag: '🇪🇺',
      currency: 'EUR',
      basePrice: 279,
      perVerification: 0.14,
      volumeDiscount: '12% off 100k+'
    }
  ];

  features = [
    'Real-time API access',
    'Batch processing',
    '99.9% uptime SLA',
    '24/7 support'
  ];
}
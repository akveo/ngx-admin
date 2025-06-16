import { Component } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  status: 'active' | 'coming-soon';
  coverage: number;
  population: string;
  databases: number;
  updateFrequency: string;
  regulations: string[];
  features: string[];
}

@Component({
  selector: 'ngx-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

  countries: Country[] = [
    {
      name: 'Australia',
      flag: '🇦🇺',
      status: 'active',
      coverage: 95,
      population: '25.7M',
      databases: 5,
      updateFrequency: 'Daily',
      regulations: ['Privacy Act 1988', 'AML/CTF Act', 'CDR'],
      features: ['Full KYC', 'Document Verification', 'Biometric Matching', 'Watchlist Screening']
    },
    {
      name: 'Indonesia',
      flag: '🇮🇩',
      status: 'active',
      coverage: 82,
      population: '273.5M',
      databases: 4,
      updateFrequency: 'Weekly',
      regulations: ['UU PDP', 'OJK Regulations'],
      features: ['Identity Verification', 'Address Validation', 'Phone Verification', 'KTP Validation']
    },
    {
      name: 'Malaysia',
      flag: '🇲🇾',
      status: 'active',
      coverage: 78,
      population: '32.4M',
      databases: 3,
      updateFrequency: 'Weekly',
      regulations: ['PDPA 2010', 'AMLA'],
      features: ['MyKad Verification', 'Address Check', 'Phone Validation', 'Business Registry']
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      status: 'active',
      coverage: 88,
      population: '125.8M',
      databases: 4,
      updateFrequency: 'Daily',
      regulations: ['APPI', 'FIEA'],
      features: ['My Number Verification', 'Address Validation', 'Corporate Registry', 'AML Check']
    },
    {
      name: 'Saudi Arabia',
      flag: '🇸🇦',
      status: 'coming-soon',
      coverage: 0,
      population: '34.8M',
      databases: 0,
      updateFrequency: 'TBD',
      regulations: ['PDPL', 'SAMA Regulations'],
      features: ['National ID Verification', 'Iqama Validation', 'Business Registry', 'AML Screening']
    }
  ];

  activeCountries = this.countries.filter(c => c.status === 'active');
  comingSoonCountries = this.countries.filter(c => c.status === 'coming-soon');
}
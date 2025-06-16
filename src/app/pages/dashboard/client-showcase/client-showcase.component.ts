import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

interface Client {
  name: string;
  logo: string;
  industry: string;
  description: string;
  verifications: string;
}

@Component({
  selector: 'ngx-client-showcase',
  styleUrls: ['./client-showcase.component.scss'],
  templateUrl: './client-showcase.component.html',
})
export class ClientShowcaseComponent implements OnDestroy {

  private alive = true;
  currentTheme: string;

  clients: Client[] = [
    {
      name: 'LexisNexis',
      logo: 'assets/images/clients/lexisnexis.png',
      industry: 'Risk Solutions',
      description: 'Global leader in legal and business information',
      verifications: '2.3M+'
    },
    {
      name: 'Data Zoo',
      logo: 'assets/images/clients/datazoo.png',
      industry: 'Identity Verification',
      description: 'Identity verification and fraud prevention',
      verifications: '1.8M+'
    },
    {
      name: 'Commonwealth Bank',
      logo: 'assets/images/clients/cba.png',
      industry: 'Banking',
      description: 'Australia\'s leading financial institution',
      verifications: '3.1M+'
    },
    {
      name: 'Westpac',
      logo: 'assets/images/clients/westpac.png',
      industry: 'Banking',
      description: 'Major Australian bank and financial services',
      verifications: '2.7M+'
    },
    {
      name: 'Telstra',
      logo: 'assets/images/clients/telstra.png',
      industry: 'Telecommunications',
      description: 'Australia\'s largest telecommunications company',
      verifications: '1.5M+'
    },
    {
      name: 'ANZ Bank',
      logo: 'assets/images/clients/anz.png',
      industry: 'Banking',
      description: 'Leading bank across Australia and New Zealand',
      verifications: '2.4M+'
    }
  ];

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
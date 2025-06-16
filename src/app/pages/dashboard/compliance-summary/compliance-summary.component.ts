import { Component } from '@angular/core';

interface ComplianceItem {
  region: string;
  regulations: string[];
  status: 'compliant' | 'in-progress' | 'planned';
  hostingModel: string;
}

@Component({
  selector: 'ngx-compliance-summary',
  styleUrls: ['./compliance-summary.component.scss'],
  templateUrl: './compliance-summary.component.html',
})
export class ComplianceSummaryComponent {

  complianceItems: ComplianceItem[] = [
    {
      region: 'Australia',
      regulations: ['Privacy Act 1988', 'AML/CTF Act', 'CDR'],
      status: 'compliant',
      hostingModel: 'Local data residency'
    },
    {
      region: 'Indonesia',
      regulations: ['UU PDP', 'OJK Regulations'],
      status: 'compliant',
      hostingModel: 'Local data center'
    },
    {
      region: 'Malaysia',
      regulations: ['PDPA 2010', 'AMLA'],
      status: 'compliant',
      hostingModel: 'Regional hosting'
    },
    {
      region: 'Japan',
      regulations: ['APPI', 'FIEA'],
      status: 'compliant',
      hostingModel: 'Local data residency'
    }
  ];

  certifications = [
    { name: 'ISO 27001', icon: 'shield-outline' },
    { name: 'SOC 2 Type II', icon: 'lock-outline' },
    { name: 'GDPR Ready', icon: 'checkmark-square-outline' }
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'compliant':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'planned':
        return 'info';
      default:
        return 'basic';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'compliant':
        return 'checkmark-circle-2-outline';
      case 'in-progress':
        return 'sync-outline';
      case 'planned':
        return 'calendar-outline';
      default:
        return 'minus-circle-outline';
    }
  }
}
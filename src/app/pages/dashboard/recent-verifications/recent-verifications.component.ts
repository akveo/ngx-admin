import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';

interface Verification {
  id: string;
  country: string;
  timestamp: Date;
  matchScore: number;
  status: 'verified' | 'partial' | 'failed';
  type: string;
}

@Component({
  selector: 'ngx-recent-verifications',
  styleUrls: ['./recent-verifications.component.scss'],
  templateUrl: './recent-verifications.component.html',
})
export class RecentVerificationsComponent implements OnDestroy {

  private alive = true;

  verifications: Verification[] = [
    {
      id: 'VER-2024-001',
      country: 'Australia',
      timestamp: new Date(Date.now() - 120000),
      matchScore: 95,
      status: 'verified',
      type: 'Identity Check'
    },
    {
      id: 'VER-2024-002',
      country: 'Indonesia',
      timestamp: new Date(Date.now() - 300000),
      matchScore: 78,
      status: 'partial',
      type: 'Address Verification'
    },
    {
      id: 'VER-2024-003',
      country: 'Japan',
      timestamp: new Date(Date.now() - 600000),
      matchScore: 92,
      status: 'verified',
      type: 'Full KYC'
    },
    {
      id: 'VER-2024-004',
      country: 'Malaysia',
      timestamp: new Date(Date.now() - 900000),
      matchScore: 45,
      status: 'failed',
      type: 'Identity Check'
    },
    {
      id: 'VER-2024-005',
      country: 'Australia',
      timestamp: new Date(Date.now() - 1200000),
      matchScore: 88,
      status: 'verified',
      type: 'Document Verify'
    },
    {
      id: 'VER-2024-006',
      country: 'Indonesia',
      timestamp: new Date(Date.now() - 1500000),
      matchScore: 91,
      status: 'verified',
      type: 'Full KYC'
    }
  ];

  constructor(private themeService: NbThemeService) {}

  getStatusIcon(status: string): string {
    switch (status) {
      case 'verified':
        return 'checkmark-circle-2-outline';
      case 'partial':
        return 'alert-triangle-outline';
      case 'failed':
        return 'close-circle-outline';
      default:
        return 'minus-circle-outline';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'verified':
        return 'success';
      case 'partial':
        return 'warning';
      case 'failed':
        return 'danger';
      default:
        return 'basic';
    }
  }

  getCountryFlag(country: string): string {
    const flags = {
      'Australia': '🇦🇺',
      'Indonesia': '🇮🇩',
      'Malaysia': '🇲🇾',
      'Japan': '🇯🇵'
    };
    return flags[country] || '🌏';
  }

  getTimeAgo(date: Date): string {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
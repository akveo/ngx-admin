import { Component } from '@angular/core';

interface Differentiator {
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

@Component({
  selector: 'ngx-differentiators',
  styleUrls: ['./differentiators.component.scss'],
  templateUrl: './differentiators.component.html',
})
export class DifferentiatorsComponent {

  differentiators: Differentiator[] = [
    {
      title: 'Real-time Updates',
      description: 'Direct integration with government and trusted sources for instant data updates',
      icon: 'flash-outline',
      metric: '< 5min latency'
    },
    {
      title: 'Multi-Source Validation',
      description: 'Cross-reference data from multiple authoritative sources for accuracy',
      icon: 'layers-outline',
      metric: '15+ sources'
    },
    {
      title: 'AI-Powered Matching',
      description: 'Advanced fuzzy matching algorithms handle name variations and typos',
      icon: 'bulb-outline',
      metric: '99.2% accuracy'
    },
    {
      title: 'Regional Expertise',
      description: 'Deep understanding of local naming conventions and data formats',
      icon: 'globe-2-outline',
      metric: '4 regions'
    },
    {
      title: 'Elastic Infrastructure',
      description: 'Built on Elasticsearch for lightning-fast queries at any scale',
      icon: 'activity-outline',
      metric: '< 250ms response'
    },
    {
      title: 'Privacy by Design',
      description: 'Zero data retention policy and end-to-end encryption',
      icon: 'shield-outline',
      metric: 'ISO 27001'
    }
  ];
}
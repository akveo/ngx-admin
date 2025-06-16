import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-results-history',
  templateUrl: './results-history.component.html',
  styleUrls: ['./results-history.component.scss']
})
export class ResultsHistoryComponent implements OnInit {
  
  // Sample data for demonstration
  recentLookups = [
    { date: '2025-05-19 10:30', country: 'Australia', score: 95, status: 'Verified' },
    { date: '2025-05-19 09:15', country: 'Indonesia', score: 82, status: 'Verified' },
    { date: '2025-05-18 16:45', country: 'Malaysia', score: 60, status: 'Partial Match' },
    { date: '2025-05-18 14:20', country: 'Japan', score: 42, status: 'No Match' },
    { date: '2025-05-17 11:30', country: 'Australia', score: 88, status: 'Verified' },
    { date: '2025-05-17 09:45', country: 'Indonesia', score: 76, status: 'Verified' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Verified':
        return 'success';
      case 'Partial Match':
        return 'warning';
      case 'No Match':
        return 'danger';
      default:
        return 'info';
    }
  }
}
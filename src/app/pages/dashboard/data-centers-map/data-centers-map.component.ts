import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

declare const L: any;

interface DataCenter {
  name: string;
  country: string;
  city: string;
  coordinates: [number, number];
  status: 'online' | 'maintenance' | 'offline';
  databases: number;
  responseTime: number;
}

@Component({
  selector: 'ngx-data-centers-map',
  styleUrls: ['./data-centers-map.component.scss'],
  templateUrl: './data-centers-map.component.html',
})
export class DataCentersMapComponent implements AfterViewInit, OnDestroy {

  private alive = true;
  private map: any;

  dataCenters: DataCenter[] = [
    {
      name: 'Sydney DC1',
      country: 'Australia',
      city: 'Sydney',
      coordinates: [-33.8688, 151.2093],
      status: 'online',
      databases: 3,
      responseTime: 45
    },
    {
      name: 'Melbourne DC2',
      country: 'Australia',
      city: 'Melbourne',
      coordinates: [-37.8136, 144.9631],
      status: 'online',
      databases: 2,
      responseTime: 52
    },
    {
      name: 'Jakarta DC1',
      country: 'Indonesia',
      city: 'Jakarta',
      coordinates: [-6.2088, 106.8456],
      status: 'online',
      databases: 4,
      responseTime: 78
    },
    {
      name: 'Kuala Lumpur DC1',
      country: 'Malaysia',
      city: 'Kuala Lumpur',
      coordinates: [3.1390, 101.6869],
      status: 'online',
      databases: 2,
      responseTime: 65
    },
    {
      name: 'Tokyo DC1',
      country: 'Japan',
      city: 'Tokyo',
      coordinates: [35.6762, 139.6503],
      status: 'online',
      databases: 3,
      responseTime: 89
    }
  ];

  constructor(
    private theme: NbThemeService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    // Wait for the view to be fully initialized
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  initMap() {
    // Initialize the map centered on Asia-Pacific region
    this.map = L.map('map', {
      center: [0, 120],
      zoom: 4,
      minZoom: 2,
      maxZoom: 18,
      maxBounds: [[-90, -180], [90, 180]],
      maxBoundsViscosity: 1.0,
      zoomControl: true,
      attributionControl: false
    });

    // Add tile layer with a professional style
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd',
      noWrap: true  // Prevent the world from repeating
    }).addTo(this.map);

    // Add markers for each data center
    this.dataCenters.forEach(dc => {
      const icon = this.createCustomIcon(dc.status);
      
      const marker = L.marker(dc.coordinates, { icon })
        .addTo(this.map)
        .bindPopup(this.createPopupContent(dc));

      // Add click event to navigate to identity lookup
      marker.on('click', () => {
        setTimeout(() => {
          this.router.navigate(['/pages/identity/manual-lookup'], {
            queryParams: { country: dc.country.toLowerCase() }
          });
        }, 1000);
      });
    });

    // Fit map to show all markers
    const group = new L.featureGroup(this.dataCenters.map(dc => L.marker(dc.coordinates)));
    this.map.fitBounds(group.getBounds().pad(0.1));
  }

  createCustomIcon(status: string) {
    const colors = {
      online: '#00d68f',
      maintenance: '#ffaa00',
      offline: '#ff3d71'
    };

    const html = `
      <div style="
        background-color: ${colors[status]};
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>
    `;

    return L.divIcon({
      html: html,
      className: 'custom-marker',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
  }

  createPopupContent(dc: DataCenter): string {
    const statusColors = {
      online: '#00d68f',
      maintenance: '#ffaa00',
      offline: '#ff3d71'
    };

    return `
      <div style="padding: 10px; min-width: 200px;">
        <h6 style="margin: 0 0 10px 0; font-weight: 600;">${dc.name}</h6>
        <div style="font-size: 14px; line-height: 1.6;">
          <div><strong>City:</strong> ${dc.city}, ${dc.country}</div>
          <div><strong>Status:</strong> <span style="color: ${statusColors[dc.status]}; font-weight: 600;">${dc.status}</span></div>
          <div><strong>Databases:</strong> ${dc.databases}</div>
          <div><strong>Response Time:</strong> ${dc.responseTime}ms</div>
        </div>
        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e4e9f2; text-align: center;">
          <span style="color: #0095ff; font-size: 12px; cursor: pointer;">
            <strong>Click to query this region →</strong>
          </span>
        </div>
      </div>
    `;
  }

  getTotalDatabases(): number {
    return this.dataCenters.reduce((sum, dc) => sum + dc.databases, 0);
  }

  getOnlineCount(): number {
    return this.dataCenters.filter(dc => dc.status === 'online').length;
  }

  getCountryCount(): number {
    // Get unique countries
    const uniqueCountries = new Set(this.dataCenters.map(dc => dc.country));
    return uniqueCountries.size;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'online':
        return '#00d68f';
      case 'maintenance':
        return '#ffaa00';
      case 'offline':
        return '#ff3d71';
      default:
        return '#8f9bb3';
    }
  }

  ngOnDestroy() {
    this.alive = false;
    if (this.map) {
      this.map.remove();
    }
  }
}
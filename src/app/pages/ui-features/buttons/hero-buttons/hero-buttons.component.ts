import { Component } from '@angular/core';

@Component({
  selector: 'ngx-hero-buttons',
  templateUrl: './hero-buttons.component.html',
})
export class HeroButtonComponent {

  heroButtons = [{
    class: 'btn-primary',
    container: 'primary-container',
    title: 'Primary Button',
    buttonTitle: 'Primary',
    gradient: 'to right, #7659ff, #ac63ff',
    bevelBorder: '#6938c9',
    shadow: 'rgba (6, 7, 64, 0.5)',
    glow: 'rgba (137, 66, 254, 0.8)',
  }, {
    class: 'btn-warning',
    container: 'warning-container',
    title: 'Warning Button',
    buttonTitle: 'Warning',
    gradient: 'to right, #ffcb17, #ff874c',
    bevelBorder: '#ce7b22',
    shadow: 'rgba (33, 7, 77, 0.5)',
    glow: 'rgba (255, 193, 38, 0.6)',
  }, {
    class: 'btn-success',
    container: 'success-container',
    title: 'Success Button',
    buttonTitle: 'Success',
    gradient: 'to right, #00c7c7, #00d977',
    bevelBorder: '#00967d',
    shadow: 'rgba (33, 7, 77, 0.5)',
    glow: 'rgba (35, 255, 181, 0.6)',
  }, {
    class: 'btn-info',
    container: 'info-container',
    title: 'Info Button',
    buttonTitle: 'Info',
    gradient: 'to right, #3dafff, #0088ff',
    bevelBorder: '#4150d9',
    shadow: 'rgba (33, 7, 77, 0.5)',
    glow: 'rgba (0, 136, 255, 0.7)',
  }, {
    class: 'btn-danger',
    container: 'danger-container',
    title: 'Danger Button',
    buttonTitle: 'Danger',
    gradient: 'to right, #ff3dae, #ff386a',
    bevelBorder: '#cc2568',
    shadow: 'rgba (33, 7, 77, 0.5)',
    glow: 'rgba (255, 73, 184, 0.8)',
  }, {
    class: 'btn-secondary',
    container: 'secondary-container',
    title: 'Ghost Button',
    buttonTitle: 'Ghost',
    border: 'White',
    bevelBorder: '#665ebd',
    shadow: 'rgba (33, 7, 77, 0.5)',
    glow: 'rgba (146, 141, 255, 1)',
  }];
}

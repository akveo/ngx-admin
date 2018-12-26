import { Injectable } from '@angular/core';

@Injectable()
export class NgxTabbedService {

  determineTabs(tabs: any): { [tab: string]: boolean } {
    return {
      'overview': this.hasOverview(tabs),
      'api': this.hasAPI(tabs),
      'theme': this.hasTheme(tabs),
      'examples': this.hasExample(tabs),
    };
  }

  hasOverview(tabs: any): boolean {
    return tabs.source.some(source => this.componentHasOverview(source));
  }

  hasExample(tabs: any): boolean {
    return tabs.source.some(source => this.componentHasExamples(source));
  }

  hasTheme(tabs: any): boolean {
    return tabs.source.some(source => this.componentHasTheme(source));
  }

  hasAPI(tabs: any): boolean {
    return tabs.source.some(source => this.componentHasMethods(source) || this.componentHasProps(source));
  }

  componentHasTheme(component): boolean {
    return component.styles &&
      component.styles.length > 0;
  }

  componentHasProps(component): boolean {
    return component &&
      component.props &&
      component.props.length > 0;
  }

  componentHasMethods(component): boolean {
    return component &&
      component.methods &&
      component.methods.length > 0 &&
      component.methods.some(method => method.shortDescription || method.description);
  }

  componentHasOverview(component): boolean {
    return component && component.overview && component.overview.length > 0;
  }

  componentHasExamples(component): boolean {
    return component.liveExamples && component.liveExamples.length > 0;
  }
}

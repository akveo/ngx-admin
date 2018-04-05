import { ViewContainerRef, ComponentFactoryResolver, Injectable, ElementRef, Renderer2 } from '@angular/core';
import { LoaderComponent } from './loader.component';

@Injectable()
export class LoadingPlaceholder {
  constructor(
    factoryResolver: ComponentFactoryResolver,
    viewContainerRef: ViewContainerRef,
    directiveHostElement: ElementRef,
    rendered2: Renderer2,
  ) {
    const loaderFactory = factoryResolver.resolveComponentFactory(LoaderComponent);
    const loaderComponentRef = viewContainerRef.createComponent(loaderFactory);

    loaderComponentRef.changeDetectorRef.detectChanges();
    const loaderComponentIndex = viewContainerRef.indexOf(loaderComponentRef.hostView);
    viewContainerRef.detach(loaderComponentIndex);

    const loaderElement = loaderComponentRef.instance.elementRef.nativeElement;
    rendered2.appendChild(directiveHostElement.nativeElement, loaderElement);
  }
}

import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable()
export class MetadataService {

  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  updateTitle(title: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title });
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:description', content: desc });
  }




}

import { Component } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { SmartTableData } from '../../../@core/data/smart-table';
import { HoverEnlargeImageComponent } from '../../shares/hover-enlarge-image/hover-enlarge-image.component';
import { LabelScoreComponent } from '../../shares/label-score/label-score.component';
import { CheckboxComponent } from '../../shares/checkbox/checkbox.component';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './imagesimilarity.component.html',
  styleUrls: ['./imagesimilarity.component.scss'],
})
export class ImageSimilarityComponent {

  settings = {
    mode: 'external',
    actions: {
      delete: true,
      add: false,
      position: 'right'
    },
    // selectMode: 'multi',
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    edit: {
      editButtonContent: '<i class="nb-paper-plane"><span class="caption-2 text-hint">Post Label</span></i>',
      // saveButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-search"><span class="caption-2 text-hint">Verify</span></i>',
      confirmDelete: true,
    },
    columns: {
      selected: {
        title: '',
        // type: 'checkbox',
        type: 'custom',
        width: '16px',
        renderComponent: CheckboxComponent
      },
      no: {
        title: 'No',
        type: 'number',
      },
      labels: {
        title: 'Label',
        type: 'string',
      },
      // predicted: {
      //   title: 'Predicted Score',
      //   type: 'number',
      // },
      predicted: {
        title: 'Predicted Score',
        type: 'custom',
        renderComponent: LabelScoreComponent
      },
      picture: {
        title: 'Picture',
        // type: 'html',
        height: '100px',
        // valuePrepareFunction: (images) => {
        //   return `<ngx-hover-enlarge-image></ngx-hover-enlarge-image>`;

        //   // return `<img class='table-thumbnail-img' height="50" src="https://via.placeholder.com/150x150">`
        // }
        type: 'custom',
        renderComponent: HoverEnlargeImageComponent
      },

    },
  };

  source: ServerDataSource;

  constructor(http: HttpClient) {
    this.source = new ServerDataSource(http, { endPoint: 'https://my.api.mockaroo.com/imagesimilarity.json?key=2780b150' });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

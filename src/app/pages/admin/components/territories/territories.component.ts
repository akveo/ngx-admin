import { Component, OnInit, ViewChild} from '@angular/core';
import { TerritoriesService } from './territories.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./territories.scss';
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-buttons/js/dataTables.buttons.js';
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.flash.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-autofill/js/dataTables.autoFill.js'

@Component({
  selector: 'territories-tables',
  templateUrl: './territories.html',
})
export class Territories implements OnInit {


  constructor(protected service: TerritoriesService ) {

  }

  ngOnInit() {
    setTimeout(() => { this.applyExport() }, 5000);

    //Load all Observables
    this.territories$ = this.service.getTerritories();

    //Initialize Methods
    this.loadSmartTableData();
  }

  private territories$;

  @ViewChild('actionModel') actionModel;
  query: string = '';
  table: Object;

  actionButtonSettings: Object[] = [{ name: "Edit", link: "edit", icon: "ion-edit" },
    { name: "Delete", link: "edit", icon: "ion-trash-b" }];
  settings = {
    attr: {
      id: "exportData",
      class: "table"
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      houseHolder : {
        title: 'houseHolder Name',
        type: 'string',
        valuePrepareFunction : (houseHolder) => {return houseHolder.hhName}
      },
      hhGender: {
        title: 'houseHolder Gender',
        type: 'string',
        valuePrepareFunction : (houseHolder) => {return houseHolder.hhGender}
      }
    }
  };


  source: LocalDataSource = new LocalDataSource();

  loadSmartTableData(){
    this.territories$.subscribe((data) => {
        this.source.load(data);
      });
  }

  applyExport() {
    jQuery('.table').DataTable({
      dom: 'Bfrtip',
      paging: false,
      ordering: false,
      searching: false,
      language: {
        search: "",
        searchPlaceholder: "Search here to export data"
      },

      buttons: [{ extend: 'copy', className: 'btn btn-primary  btn-space', exportOptions: { columns: [2, 3, 4, 5] } },
        { extend: 'csv', className: 'btn btn-primary btn-space ', exportOptions: { columns: [2, 3, 4, 5] } },
        { extend: 'excelHtml5', className: 'btn btn-primary btn-space ', exportOptions: { columns: [2, 3, 4, 5] } },
        { extend: 'pdfHtml5', className: 'btn btn-primary  btn-space', exportOptions: { columns: [2, 3, 4, 5] }, title: "Territories" },
        { extend: 'print', className: 'btn btn-primary btn-space ', exportOptions: { columns: [2, 3, 4, 5] } }
      ]
    });
    $('#exportData_filter input').addClass('form-control');
    $('.dt-buttons').addClass('form-group');
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  onuserRowSelect(event): void {
    this.actionModel.showActionModal();
  }



}



interface JQuery {
  applyDataTableDom();
}

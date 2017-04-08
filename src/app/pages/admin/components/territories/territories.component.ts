import { Component , OnInit} from '@angular/core';
import { TerritoriesService } from './territories.service';
import { LocalDataSource } from 'ng2-smart-table';
import 'style-loader!./territories.scss';
import  'datatables.net/js/jquery.dataTables.js';
import  'datatables.net-buttons/js/dataTables.buttons.js';
import  'datatables.net-buttons/js/buttons.colVis.js';
import  'datatables.net-buttons/js/buttons.flash.js';
import  'datatables.net-buttons/js/buttons.html5.js';
import  'datatables.net-buttons/js/buttons.print.js';
import  'datatables.net-autofill/js/dataTables.autoFill.js'


@Component({
  selector: 'territories-tables',
  templateUrl: './territories.html',
})
export class Territories implements OnInit{

  constructor(protected service: TerritoriesService ) {

    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  query: string = '';
  table:Object;


  settings = {
    attr:{
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
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }
    }
  };


  source: LocalDataSource = new LocalDataSource();

ngOnInit(){
    setTimeout(()=>{this.applyExport()},5000);
}


applyExport() {
  console.log(jQuery('.table').get(0));
  jQuery('.table').DataTable( {
       dom: 'Bfrtip',
       paging:   false,
       ordering: false,
       searching: false,
        language: {
             search:"",
             searchPlaceholder: "Search here to export data"
         },

       buttons: [ { extend: 'copy', className: 'btn btn-primary  btn-space' ,   exportOptions: {   columns: [  2, 3,4,5 ]  }},
                  { extend: 'csv', className: 'btn btn-primary btn-space ' ,   exportOptions: {   columns: [ 2, 3,4,5 ]  }},
                  { extend: 'excelHtml5', className: 'btn btn-primary btn-space ' ,   exportOptions: {   columns: [ 2, 3,4,5 ]  }},
                  { extend: 'pdfHtml5', className: 'btn btn-primary  btn-space' ,   exportOptions: {   columns: [ 2, 3,4,5]  } , title:"Territories" },
                  { extend: 'print', className: 'btn btn-primary btn-space ' ,   exportOptions: {   columns: [ 2, 3,4,5 ]  } }
       ]
     } );
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


}



interface JQuery {
    applyDataTableDom();
}

import { Component, ViewEncapsulation } from '@angular/core';
import { SweetAlertService } from './sweetAlertService';


@Component({
    selector: 'sweet-alert',
    encapsulation: ViewEncapsulation.None,
    template: require('./sweetAlert.html'),
    styles:[require('sweetalert2/dist/sweetalert2.min.css')]
})
export class SweetAlert {
    constructor(private swal: SweetAlertService) {

    }

    demo1() {
        this.swal.swal('Here\'s a message');
    }


    demo2() {
        this.swal.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
    };

    demo3() {
        this.swal.swal('Good job!', 'You clicked the button!', 'success');
    };

    demo4() {
        this.swal.swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',

        }).then((ret) => {
            console.log(ret);
        }, (dismiss) => {
            console.log(dismiss);
        });
    };

    demo5() {
        this.swal.swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel plx!',
        }).then(() => {
            this.swal.swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }, (dismiss) => {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                console.log(this);
                this.swal.swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        });
    };

    demo6() {
        this.swal.swal({
            title: 'Sweet!',
            text: 'Here\'s a custom image.',
            imageUrl: 'http://oitozero.com/img/avatar.jpg'
        });
    };
}
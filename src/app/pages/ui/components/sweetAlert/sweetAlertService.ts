var sweetAlert = require('sweetalert2');

export class SweetAlertService {
  constructor() {}

  swal(...args) { 
    return sweetAlert(...args);
  } 
  
}
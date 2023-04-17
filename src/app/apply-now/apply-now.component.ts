import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit{
  submitted:any = false;
  form!:FormGroup ;
  

  constructor(
    private apiservice: ApiService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    
  ) {
    
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      position: ['', [Validators.required]],
     
        address1: ['',[Validators.required]],
        address2: ['',[Validators.required]],
        city: ['',[Validators.required]],
     
   
      summary: ['', [Validators.required]]
    });
    // console.log(this.f);
    
  }
  onProductCreate(products: {
    pName: string;
    pMessage: string;
    
    pEmail: string;
    pESummary: string;
    pAddress: string;
    pAddress1: string;
    pAddress2: string;
    pCity: string;
  }) {
    this.submitted = true;
    // console.log(this.form);

    if (this.form.invalid) {
      return;
    }
    let data={
      name: this.form.value.name,
      email: this.form.value.email,
      address: {
          address1: this.form.value.address1,
          address2: this.form.value.address2,
          city: this.form.value.city
      },
      position: this.form.value.position,
      summary: this.form.value.summary
    }
    // console.log(data);
    
    this.apiservice.applyNow(data).subscribe((res) => {
        console.log(res,"success");

      Swal.fire('Success!', 'Submitted successfully.', 'success');

      this.dialog.closeAll();
    });
  }
  get f() {

    return this.form.controls;
  }
  tinyAlert() {
    Swal.fire('Hey there!');
  }
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  } 

}

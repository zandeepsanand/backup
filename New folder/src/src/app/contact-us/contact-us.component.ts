

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
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
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
      contactNumber: [
        '',
        [Validators.required, Validators.pattern('[- +()0-9]+')],
      ],
      message: ['', [Validators.required]],
    });
    console.log(this.f);
    
  }
  onProductCreate(products: {
    pName: string;
    pMessage: string;
    pContact: string;
    pEmail: string;
  }) {
    this.submitted = true;
    console.log(this.form);

    if (this.form.invalid) {
      return;
    }
    this.apiservice.uploadContact(this.form.value).subscribe((res) => {
      //   console.log(res,"success");

      Swal.fire('Success!', 'Contact submitted successfully.', 'success');

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

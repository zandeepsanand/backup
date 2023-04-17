import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ApplyNowComponent } from '../apply-now/apply-now.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
constructor( public translate: TranslateService , private dialog: MatDialog , private meta: Meta, private title: Title){
  this.title.setTitle('Ggera - job');
 
}
openDialog() {
  const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(ApplyNowComponent, dialogConfig);
      
}
}

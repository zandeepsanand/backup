import { Component } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import * as AOS from 'aos';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  name = '!!!';
  viewMode = 'tab1';
  constructor(private dialog: MatDialog , public translate: TranslateService ,private meta: Meta, private title: Title , private apiService: ApiService){
// console.log(translate);

this.title.setTitle('GGera - Play With a Pro and Become a Pro ');
this.meta.updateTag({ name: 'description', content: 'GGera is the perfect destination for gamers of all levels. Play with pros and learn from them, or join tournaments and challenge yourself to reach pro-level gaming. With GGera, you can take your gaming skills to the next level!' });

  }

 
  openDialog() {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(ContactUsComponent, dialogConfig);
        
  }
  ngOnInit() {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss']
})
export class RoasterComponent {
  constructor(public translate: TranslateService ,private meta: Meta, private title: Title) {
    this.title.setTitle('Roaster - Find Roasters, Pro Gamers and Pro Players Here!');
    this.meta.updateTag({ name: 'description', content: 'GGera is the ultimate platform for pro gamers. Our roaster of professional players will help you get to the top of your game faster.' });
  }
}

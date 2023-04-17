import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';
import { Meta, Title } from '@angular/platform-browser';

declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public translate: TranslateService ,private meta: Meta, private title: Title) {
    this.title.setTitle('About Us - GGera: Professional Gaming Coaching and Pro Gamers');
    this.meta.updateTag({ name: 'description', content: 'Unlock your gaming potential with GGera. Join an exclusive community of Pro gamers, find the right coach, and level up your skills' });
    
  }

  ngOnInit(): void {

  
}}

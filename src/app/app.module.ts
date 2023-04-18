import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { PremadePartyComponent } from './premade-party/premade-party.component';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { I18nModule } from './i18n/i18n.module';
import { AboutComponent } from './about/about.component';
import { RoasterComponent } from './roaster/roaster.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobComponent } from './job/job.component';
import { RoasterPlayerComponent } from './roaster-player/roaster-player.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { AuthInterceptor } from './auth.interceptor';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PremadePartyComponent,
    AboutComponent,
    RoasterComponent,
    JobComponent,
    RoasterPlayerComponent,
    TermsConditionComponent,
    PrivacyComponent,
    ContactUsComponent,
    ApplyNowComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    SwiperModule,
    HttpClientModule,
    I18nModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule,
    
   
   
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

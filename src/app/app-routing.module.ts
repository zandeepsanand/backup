import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { RoasterComponent } from './roaster/roaster.component';
import { JobComponent } from './job/job.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LoginComponent } from './login/login.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { PremadePartyNewComponent } from './premade-party-new/premade-party-new.component';

const routes: Routes = [
  { path: 'index',  component: LoginComponent },
  { path: 'premade_new',  component: PremadePartyNewComponent },
  { path: 'otp',  component: OtpPageComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'roaster',  component: RoasterComponent },
  { path: 'job',  component: JobComponent },
  { path: 'terms',  component: TermsConditionComponent },
  { path: 'privacy',  component: PrivacyComponent },
  { path: '', redirectTo:'index',pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

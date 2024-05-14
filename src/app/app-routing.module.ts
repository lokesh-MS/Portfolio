import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { slideInAnimation } from './components/navigateanimation/navigateanimation.component';
import { ContactComponent } from './components/contact/contact.component';
import { animation } from '@angular/animations';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'HomePage', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'AboutPage', component: AboutComponent, data: { animation: 'AboutPage' } },
  {path:'ContactPage',component:ContactComponent, data:{animation:'ContactPage'}},
  {path:'ResumePage',component:ResumeComponent, data:{animation:'ResumePage'}},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

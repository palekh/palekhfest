import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { ProgramComponent } from './content/program/program.component';
import { ParticipantsComponent } from './content/participants/participants.component';
import { GuideComponent } from './content/guide/guide.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { NavigationComponent } from './elements/navigation/navigation.component';
import { FooterComponent } from './elements/footer/footer.component';
import { LogoComponent } from './elements/logo/logo.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'program', component: ProgramComponent},
  {path: 'participants', component: ParticipantsComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    ParticipantsComponent,
    GuideComponent,
    ContactsComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

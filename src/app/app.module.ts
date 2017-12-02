import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';
import { ParticipantsComponent } from './participants/participants.component';
import { GuideComponent } from './guide/guide.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'program', component: ProgramComponent},
  {path: 'participants', component: ParticipantsComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'contacts', component: ContactsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    ParticipantsComponent,
    GuideComponent,
    ContactsComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

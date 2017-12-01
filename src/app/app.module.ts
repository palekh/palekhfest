import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';
import { ParticipantsComponent } from './participants/participants.component';
import { GuideComponent } from './guide/guide.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    ParticipantsComponent,
    GuideComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

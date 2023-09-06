import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper.component/wrapper.component';
import { ListComponent } from './list.component/list.component';
import { NoteComponent } from './note.component/note.component';

@NgModule({
  declarations: [AppComponent, WrapperComponent, ListComponent, NoteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowComponent } from './show.component';

@NgModule({
  imports:      [ BrowserModule, NgJsonEditorModule,
  FormsModule,
    ReactiveFormsModule ],
  declarations: [ AppComponent, ShowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@NgModule({
  declarations: [
    AppComponent  // Put it back in declarations
  ],
  imports: [
    BrowserModule,
    CommonModule,  // Add CommonModule for *ngIf and *ngFor
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
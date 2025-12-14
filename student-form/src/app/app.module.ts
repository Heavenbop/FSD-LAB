import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // <-- MUST be included 
 
import { AppComponent } from './app.component'; 
 
@NgModule({ 
  declarations: [ 
    AppComponent 
  ], 
  imports: [ 
    BrowserModule, 
    FormsModule // <-- Added here 
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  /*declarations: [
    // other components
    MainComponent
  ],*/
  imports: [
    BrowserModule,
    // other modules
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }

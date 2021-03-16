
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the AccordionModule for the Accordion component
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-navigations module into NgModule
  imports:      [ BrowserModule, AccordionModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
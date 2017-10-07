import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';
import { NewComponent } from './new/new.component';
import {RacingServicesService } from './racing-services/racing-services.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    DataComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RacingServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

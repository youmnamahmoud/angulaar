import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent} from './form/form.component';
import {RacingServicesService } from './racing-services/racing-services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result:any;

  constructor(private rc:RacingServicesService){}
  getDataFromService(){
  		this.rc.getData().subscribe((res)=>this.result = res.data);

  }


	
}
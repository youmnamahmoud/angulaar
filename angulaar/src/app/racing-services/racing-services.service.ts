import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class RacingServicesService {

// declare variables



  constructor(private http:Http) { }

// functions
getData(){
	return this.http.get('https://reqres.in/api/users?page=2').map((res) => res.json());
}


}

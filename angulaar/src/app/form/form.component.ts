import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  name:string;
  password:string;
  result:{};
  constructor() { }

  submitMe(data){
 	console.log(data);
 }


  ngOnInit() {
  	console.log('hello');
  }

}

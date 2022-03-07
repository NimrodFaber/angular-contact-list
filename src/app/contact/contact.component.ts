import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@Input() name="uh"
@Input() phone="0000000"
@Output() counterchiled= new EventEmitter<object>()

count(){
  console.log("but mom");
  
  this.counterchiled.emit({name:this.name,phone:this.phone})
}
  constructor() { }

  ngOnInit(): void {
  }

}

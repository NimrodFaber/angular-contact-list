import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
 @Input() counter = 0
 contacts = [{name:"elen",phone:"089857"},{name:"nimrod",phone:"089857"}]
counterparent(){
  console.log("my kid is a beach");
  console.log(this.counter++);
  
  
}
  constructor() { }

  ngOnInit(): void {
  }

}

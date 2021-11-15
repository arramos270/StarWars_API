import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/interfaces/people.interface';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() personInput!: Person;
  @Output() personSelectedEvent = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  getPersonId(url: string){
    let id = url.split("/", 6).pop();
    return id;
  }

  onPersonClick(){
    this.personSelectedEvent.emit(this.personInput);
  }

}

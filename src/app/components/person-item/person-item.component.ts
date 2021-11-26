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

  getPersonId(url: string | undefined){
    let id=null;
    if(url!=undefined){
      id = url.split("/", 6).pop();
    }
    return id;
  }

  showImage(url: string | undefined){
    return `https://starwars-visualguide.com/assets/img/characters/${this.getPersonId(url)}.jpg`;
  }

  onPersonClick(){
    this.personSelectedEvent.emit(this.personInput);
  }

}

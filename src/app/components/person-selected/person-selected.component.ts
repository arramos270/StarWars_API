import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/people.interface';
import { PersonItemComponent } from '../person-item/person-item.component';

@Component({
  selector: 'app-person-selected',
  templateUrl: './person-selected.component.html',
  styleUrls: ['./person-selected.component.css']
})
export class PersonSelectedComponent implements OnInit {
  @Input() person!: Person;

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

  showImg(url: string | undefined){
    let id = this.getPersonId(url);
    if(id==undefined){
      return `https://www.programmableweb.com/sites/default/files/TheStarWarsAPI.png`;
    } else {
      return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }
  }

  weHaveId(url: string | undefined){
    let id = this.getPersonId(url);
    if(id==undefined){
      return false;
    } else {
      return true;
    }
  }

}

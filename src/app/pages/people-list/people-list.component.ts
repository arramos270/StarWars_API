import { Component, OnInit } from '@angular/core';
import { Person, PersonResponse } from 'src/app/models/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList!: Person[];
  personResponse!: PersonResponse;
  personSelected!: Person;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(res => {
      this.peopleList=res.results;
    })
  }

  onPersonSelected(newPerson: Person){
    this.personSelected = newPerson;
  }

}

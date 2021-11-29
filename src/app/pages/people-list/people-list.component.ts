import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  genderFormControl = new FormControl('');
  listaPersonajesFiltrados: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
    this.listaPersonajesFiltrados=this.peopleList;
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(res => {
      this.peopleList=res.results;
    })
  }

  onPersonSelected(newPerson: Person){
    this.personSelected = newPerson;
  }

  doFilter() {
    let genderSelected = this.genderFormControl.value;
    this.listaPersonajesFiltrados=this.peopleList.filter(p => p.gender == genderSelected);
  }

}

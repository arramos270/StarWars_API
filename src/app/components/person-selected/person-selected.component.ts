import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/people.interface';

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

}

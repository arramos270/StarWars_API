import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';
import { PersonItemComponent } from '../person-item/person-item.component';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  actualPerson!: Person;
  constructor(private route: ActivatedRoute, private service: PeopleService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('idPerson');
    console.log(id);
    if(id!=null)
    this.service.getPersonById(id).subscribe(res => {
      this.actualPerson=res;
    });
  }

}

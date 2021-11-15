import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from '../components/person-details/person-details.component';
import { PeopleListComponent } from '../pages/people-list/people-list.component';

const routes: Routes = [
  { path:'people', component: PeopleListComponent },
  { path: 'people/:idPerson',component: PersonDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/people' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

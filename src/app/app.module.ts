import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonSelectedComponent } from './components/person-selected/person-selected.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonItemComponent,
    PersonDetailsComponent,
    PersonSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

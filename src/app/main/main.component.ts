import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service'
import { Person } from '../person'
import { AppRoutingModule } from '../app-routing.module';
import {TooltipPosition} from '@angular/material';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.getAllPersons()
  }

  getAllPersons():void {
    this.peopleService.getPersons().subscribe(people => 
      this.people = people);
    }

}

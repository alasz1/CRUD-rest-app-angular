import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service'
import { Person } from '../person'
import { getPreviousOrParentTNode } from '@angular/core/src/render3/state';
import {MainComponent} from '../main/main.component';
import { ActivatedRoute, Router } from '@angular/router';
//import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.css']
})
export class EditpersonComponent implements OnInit {

  person: Person;
  

  constructor(private peopleService: PeopleService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params=>{
      let id:number=params['id'];
      this.peopleService.getPerson(id).subscribe((person:Person)=>{
      this.person=person;
      })
    })
  }

  update(){
    console.dir(this.person);
    this.peopleService.updatePerson(this.person).subscribe((person:Person)=>{
    this.router.navigateByUrl("/");    
    })
  }

  delete(){
    this.peopleService.deletePerson(this.person.id).subscribe(()=>{
    this.router.navigateByUrl("/");
    })
  }

  goBack(){
    this.router.navigateByUrl("/");
  }
  
}

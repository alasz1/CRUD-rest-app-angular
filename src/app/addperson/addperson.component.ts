import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service'
import { Person } from '../person'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {
  // people: Person[];


  constructor(private peopleService: PeopleService, private router:Router) { }

  ngOnInit() {
  }

  addPerson(name:string, email:string){
    // console.log(this.name)
    let np = new Person(null,name,email);
    this.peopleService.addPerson(np).subscribe((newperson)=>{
    console.dir(newperson);
    this.router.navigateByUrl("/");
  })

}

}

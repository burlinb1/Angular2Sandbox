import { Component, OnInit } from '@angular/core';
import { PersonService } from "../person/person.service";
import { Person } from '../person/person';

@Component({
    selector: "personlist",
    templateUrl: "../person/personlist.component.html",
    providers: [PersonService]
})
export class PersonListComponent implements OnInit {
    constructor(private personService: PersonService){

    }

    Persons: Person[];        

    ngOnInit(): void {
        this.Persons = this.personService.getPersons();
    }
}
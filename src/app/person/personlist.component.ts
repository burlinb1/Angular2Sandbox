import { Component, OnInit } from '@angular/core';
import { PersonService } from "../service/person/person.service";
import { Person } from '../service/person/person';

@Component({
    selector: "personlist",
    templateUrl: "../person/personlist.component.html",
    styleUrls: ["../person/personlist.component.css"],
    providers: [PersonService]
})
export class PersonListComponent implements OnInit {
    constructor(private personService: PersonService){

    }

    Persons: Person[];        

    ngOnInit(): void {
        this.Persons = this.personService.getPersons();
    }

    onSelect(person: Person): void {        
        this.selectedPerson = person;
    }

    // Fires when person 'Cancel' button is clicked.
    cancelEdit(event): void{
        this.selectedPerson = null;
    }

    selectedPerson: Person;
}
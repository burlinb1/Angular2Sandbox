import { Component, Input } from "@angular/core";
import { Person } from '../person/person';

@Component({
    selector: "person",
    templateUrl: "../person/person.component.html"
})
export class PersonComponent{
    constructor(){
        //this.person = new Person();
        //this.person.FirstName = "Hello";
    }

    @Input()
    person: Person
}
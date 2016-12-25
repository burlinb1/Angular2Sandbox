import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Person } from '../person/person';

@Component({
    selector: "person",
    templateUrl: "../person/person.component.html"
})
export class PersonComponent{
    constructor(){
    }

    @Input()
    person: Person
    
    // Parent component can subsccribe to the onCancel event.
    @Output() onCancel = new EventEmitter();

    onCancelClick(): void{
        //alert('cancel');
        this.onCancel.emit();
    }
}
import { Injectable } from '@angular/core';
import { Person } from '../person/person';

@Injectable()
export class PersonService
{
    getPersons(): Person[]{
        return [
            { Id: 1, FirstName: 'Brian', LastName: 'Burlingame'},
            { Id: 2, FirstName: 'Madeline', LastName: 'Burlingame'}
        ];
    }
}
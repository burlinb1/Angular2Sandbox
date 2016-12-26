import { Injectable } from '@angular/core';
import { Person } from '../person/person';
import { Address } from '../address/address';

@Injectable()
export class PersonService
{
    getPersons(): Person[]{
        return [
            { Id: 1, FirstName: 'Brian', LastName: 'Burlingame', 
                PrimaryAddress: {StreetAddress1:"1234"}
            },
            { Id: 2, FirstName: 'Madeline', LastName: 'Burlingame', 
                PrimaryAddress: {StreetAddress1:"5678"}
            }
        ];
    }
}
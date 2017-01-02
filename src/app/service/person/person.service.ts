import { Injectable } from '@angular/core';
import { Person } from '../person/person';
import { Address } from '../../address/address';

@Injectable()
export class PersonService
{
    getPersons(): Person[]{
        return [
            { Id: 1, FirstName: 'Brian', LastName: 'Burlingame', 
                PrimaryAddress: {StreetAddress1:"1234", StreetAddress2:"",
                    CityId: 0, CityName: "", 
                    StateId:0, StateName:""}
            },
            { Id: 2, FirstName: 'Madeline', LastName: 'Burlingame', 
                PrimaryAddress: {StreetAddress1:"5678", StreetAddress2:"", 
                    CityId: 0, CityName: "",
                    StateId:0, StateName:""}
            }
        ];
    }
}
import { Injectable } from '@angular/core';
import { City } from '../../service/city/city';

@Injectable()
export class CityService{
    getCities(): Promise<City[]>{
        return Promise.resolve(CITIES);
    }   
}

export const CITIES: City[] = [
    {Id: 1, Name: "Algona"},
    {Id: 2, Name: "Federal Way"},
    {Id: 3, Name: "Olympia"},
    {Id: 4, Name: "Seattle"},
    {Id: 5, Name: "Tacoma"}
    ];
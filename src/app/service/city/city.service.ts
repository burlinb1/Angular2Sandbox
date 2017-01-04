import { Injectable } from '@angular/core';
import { City } from '../../service/city/city';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityService{
    //getCities(): Promise<City[]>{
    //    return Promise.resolve(CITIES);
    //}
    public getCities(token:string):Observable<any> {

        let query = new RegExp(token, 'ig');

        return Observable.of(
            CITIES.filter((city:City) => {
                return query.test(city.Name);                
            })
        );        
    }   
}

export const CITIES: City[] = [
    {Id: 1, Name: "Algona"},
    {Id: 2, Name: "Federal Way"},
    {Id: 3, Name: "Olympia"},
    {Id: 4, Name: "Seattle"},
    {Id: 5, Name: "Tacoma"}
    ];
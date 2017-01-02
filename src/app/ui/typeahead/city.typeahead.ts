import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead/typeahead-match.class';
//import { StateService } from '../../service/state.service';

@Component({
  selector: 'city-typeahead',
  template: `
    <input [(ngModel)]="asyncSelected"
      [typeahead]="dataSource"
      (typeaheadLoading)="changeTypeaheadLoading($event)"
      (typeaheadNoResults)="changeTypeaheadNoResults($event)"
      (typeaheadOnSelect)="typeaheadOnSelect($event)"
      [typeaheadOptionsLimit]="7"
      [typeaheadOptionField]="'name'"
      placeholder="Start typing a city name"
      class="form-control">`
})
export class CityTypeahead {  
  //http://stackoverflow.com/questions/39365359/using-ng2-bootstrap-with-angular-2-rc-6-cant-bind-to-cant-bind-to-sinc
  public constructor() {
    this.dataSource = Observable.create((observer:any) => {
      // Runs on every search
      observer.next(this.selected);
    }).mergeMap((token:string) => this.getCities(token));
  }

  public dataSource:Observable<any>;
  public selected:string = '';
  public typeaheadLoading:boolean = false;
  public typeaheadNoResults:boolean = false;    
  
  public getCities(token:string):Observable<any> {

    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.cities.filter((state:any) => {
        return query.test(state.name);
      })
    );
  }

  public changeTypeaheadLoading(e:boolean):void {
    this.typeaheadLoading = e;
  }

  public changeTypeaheadNoResults(e:boolean):void {
    this.typeaheadNoResults = e;
  }

  public typeaheadOnSelect(e:TypeaheadMatch):void {
    console.log('Selected value: ', e.value);
    alert(e.value);
  }

/*
  public states:Array<string> = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
    'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico',
    'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'];
    */
    public cities:Array<any> = [
        {id: 1, name: "Astoria"},
        {id: 2, name: "Federal Way"},
        {id: 3, name: "Olympia"},
        {id: 4, name: "Seattle"},
        {id: 5, name: "Tacoma"}
    ];
}

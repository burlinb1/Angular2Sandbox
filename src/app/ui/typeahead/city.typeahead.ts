import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead/typeahead-match.class';
import { CityService } from '../../service/city/city.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'city-typeahead',
  template: `
    <input [(ngModel)]="selected"
      [typeahead]="dataSource"
      (typeaheadLoading)="changeTypeaheadLoading($event)"
      (typeaheadNoResults)="changeTypeaheadNoResults($event)"
      (typeaheadOnSelect)="typeaheadOnSelect($event)"
      [typeaheadOptionsLimit]="7"
      [typeaheadOptionField]="'Name'"
      placeholder="Start typing a city name"
      class="form-control">`,
    providers: [CityService]
})
export class CityTypeahead {  
  public constructor(private cityService:CityService) {
    this.dataSource = Observable.create((observer:any) => {
      // Runs on every search
      observer.next(this.selected);
    }).mergeMap((token:string) => this.cityService.getCities(token));
  }

  public dataSource:Observable<any>;
  public selected:string = '';
  public typeaheadLoading:boolean = false;
  public typeaheadNoResults:boolean = false;    
  
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
}

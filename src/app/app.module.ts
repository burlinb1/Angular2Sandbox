import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';
import { TypeaheadModule  } from 'ng2-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SmartInput } from './ui/smartinput/smartinput';
import { StateTypeahead } from './ui/typeahead/state.typeahead';
import { CityTypeahead } from './ui/typeahead/city.typeahead';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/personlist.component';
import { StateService } from './service/state/state.service';
import { CityService } from './service/city/city.service';
//import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SmartInput,
    HomeComponent,
    PersonListComponent,
    PersonComponent,
    StateTypeahead,
    CityTypeahead
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(), 
    TypeaheadModule.forRoot(),
  ],
  providers: [CityService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TypeaheadModule  } from 'ng2-bootstrap';
import { SmartInput } from './ui/smartinput/smartinput';
import { StateTypeahead } from './ui/typeahead/state.typeahead';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/personlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartInput,
    PersonListComponent,
    PersonComponent,
    StateTypeahead
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

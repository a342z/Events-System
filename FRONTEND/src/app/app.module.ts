import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerEditComponent } from './speaker/speaker-edit/speaker-edit.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';

import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image';
import { ArraySplicePipe } from './array-splice.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import {RatingModule} from 'primeng/rating';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';

//Routing 
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoggingInterceptor } from './intrerceptors/logging.interceptor';
import { LoginComponent } from './login/login.component';
// import { EventEditComponent } from './event/event-edit/event-edit.component';
// import { EventListComponent } from './evemt/event-list/event-list.component';
// import { EventComponent } from './models/event/event.component';
import { EventModule } from './event/event.module';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventAddComponent } from './event/event-add/event-add.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SpeakerAddComponent,
    SpeakerEditComponent,
    SpeakerDetailsComponent,
    SpeakerListComponent,
    ArraySplicePipe,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    // EventEditComponent,
    // EventListComponent,
    // EventComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ImageModule,
    CheckboxModule,
    RatingModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    CardModule,
    InputTextModule
    

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},
    //you may need to add base URL
    {provide:"baseUrl",useValue:"http://localhost:8080/"}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

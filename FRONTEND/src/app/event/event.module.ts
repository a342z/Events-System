import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { RouterModule, Routes } from '@angular/router';
// import {DropdownModule} from 'primeng/dropdown';

const routes:Routes=[
  {path:"",component:EventListComponent},
  {path:"details/:id",component:EventDetailsComponent},
  {path:"edit/:id",component:EventEditComponent},
  {path:"add",component:EventAddComponent},
]

@NgModule({
  declarations: [
    EventAddComponent,
    EventDetailsComponent,
    EventEditComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,FormsModule,ButtonModule,RouterModule.forChild(routes),CardModule,
    InputTextModule
  ],
  exports:
  [   
    EventAddComponent,
    EventDetailsComponent,
    EventEditComponent,
    EventListComponent
  ]
})
export class EventModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},

  {path:"speakers",component:SpeakerListComponent, canActivate:[LoginGuard],children:
  [
    // {path:"details/:id",component:SpeakerDetailsComponent},
    // {path:"edit/:id",component:SpeakerEditComponent},

  ]},

  {path:"speakers/add", canActivate:[LoginGuard],component:SpeakerAddComponent},

  //Easy Loading. defauls is eager loading
  {path:"events",canActivate:[LoginGuard],loadChildren:()=>import("./event/event.module").then(m=>m.EventModule)},

  {path:"**",component:ErrorComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

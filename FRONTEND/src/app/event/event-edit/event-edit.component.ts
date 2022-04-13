import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/models/speaker';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event:Event = new Event(-1,"title",new Date(),"speaker") ; 
  speakers:Speaker[] = [];

  constructor(public speakerService:SpeakerService, public eventService:EventService,public ac:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.speakerService.getAllSpeakers().subscribe(a=>this.speakers = a) ; 
    this.ac.params.subscribe(a=>{
      
      this.eventService.getServiceById(a['id']).subscribe(
           data=>{this.event=data;
            console.log("data",data);},
         );
    })
    
  }

  save()
  {
    this.eventService.updateEvent(this.event).subscribe(a=>console.log(a));
  }


}

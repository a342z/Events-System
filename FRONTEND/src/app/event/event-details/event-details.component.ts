import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/models/event';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor( public eventService:EventService,public ac:ActivatedRoute,public router:Router) { }

  eventId:number=0;
  event:Event = new Event(-1,"title",new Date(),"speaker") ; 
  ngOnInit(): void {

    
    this.ac.params.subscribe(a=>{
      
      this.eventService.getServiceById(a['id']).subscribe(
           data=>{this.event=data;
            console.log("data",data);},
         );
    })
  }

  back()
  {
    this.router.navigate(['/events'])
  }

  
 
}

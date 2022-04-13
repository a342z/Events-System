import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {
  events: Event[] = [] ;


  constructor(public eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      a=> {console.log(a);this.events=a}
    )
  }

  load(){
    
    this.eventService.getAllEvents().subscribe(
      a=>this.events=a
    )
  }

  deleteEvent(id:number)
  {
    console.log("ID",id);
    this.eventService.deleteEvent(id).subscribe(data => {console.log(data);
      this.load();
    }) ; 
  
  }

}

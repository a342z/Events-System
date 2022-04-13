import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/models/event';
import { Speaker } from 'src/app/models/speaker';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  event: Event = new Event(0, "", new Date(), "");
  speakers: Speaker[] = [];

  constructor(public eventService: EventService, public speakerService: SpeakerService, public router: Router) {

  }

  save() {
    this.eventService.addEvent(this.event).subscribe(a => { console.log(a); this.router.navigateByUrl("/events") });
  }

  ngOnInit(): void {
    this.speakerService.getAllSpeakers().subscribe(a => this.speakers = a)
  }



} 

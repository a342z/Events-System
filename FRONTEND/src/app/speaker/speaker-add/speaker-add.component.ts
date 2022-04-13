import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/models/speaker';
import { SpeakerService } from 'src/app/speaker.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css'],
})
export class SpeakerAddComponent implements OnInit {
  idCounter: number = 0;
  speaker = new Speaker(this.idCounter, '', '', '', new Date(), 0, false, 5);

  updateFlag: boolean = false;
  detailsFlag: boolean = false;
  updateIndex: number = -1;
  showImageFlag: boolean = true;
  rating: number = 5;

  add: boolean = false;

  file: any;

  showAdd() {
    this.add = true;
  }

  incrementId() {
    return this.idCounter++;
  }

  onFileChange(s: any) {
    this.file = s.target.files[0];
  }

  addSpeaker() {
    // this.speaker._id = this.incrementId();
    // this.speakers.push(Object.assign({}, this.speaker));
    // this.speakerService.addSpeaker(Object.assign({}, this.speaker)) ;
    this.speakerService
      .addSpeaker(this.speaker, this.file)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/speakers']);
      });
  }

  constructor(public speakerService: SpeakerService, public router: Router) {}

  ngOnInit(): void {}
}

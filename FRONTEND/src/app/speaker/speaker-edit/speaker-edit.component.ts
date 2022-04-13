import { Component, OnInit, Input } from '@angular/core';
import { Speaker } from 'src/app/models/speaker';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css'],
})
export class SpeakerEditComponent implements OnInit {
  @Input() id: number = -1;

  speaker: Speaker = new Speaker(0, '', '', '', new Date(), 0, false, 5);
  display: boolean = false;
  file: any; 

  editSpeaker() {
    this.display = true;
    this.speakerService.getSpeakerById(this.id).subscribe((data) => {
      this.speaker = data;
    });
  }

  
  onFileChange(s: any) {
    this.file = s.target.files[0];
  }

  updateSpeaker() {
    console.log(this.speaker);
    this.speakerService
      .setSpeakerById(this.id, this.speaker,this.file)
      .subscribe((data) => console.log(data));
    this.display = false;
  }

  constructor(public speakerService: SpeakerService) {}

  ngOnInit(): void {}
}

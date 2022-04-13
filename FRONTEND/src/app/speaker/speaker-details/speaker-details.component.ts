import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Speaker } from 'src/app/models/speaker';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css'],
})
export class SpeakerDetailsComponent implements OnInit {
  constructor(public speakerService: SpeakerService) {}

  @Input() id: number = -1;

  speaker: Speaker | null = new Speaker(0, '', '', '', new Date(), 0, false, 5);

  ngOnInit(): void {}

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  showSpeaker() {
    this.display = true;
    // this.speakerService.getAllSpeakers().subscribe(speakers => this.speakers = speakers);
    // this.speakerService.getSpeakerById(this.id).subscribe(data => this.speaker = data);
    this.speakerService.getSpeakerById(this.id).subscribe((data) => {
      this.speaker = data;
    });

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (!changes['id'].isFirstChange())
  //     this.speakerService.getSpeakerById(this.id).subscribe((data) => {
  //       this.speaker = data;
  //       console.log(data);
  //     });

  //   // console.log("speaker",this.speaker);
  // }
}

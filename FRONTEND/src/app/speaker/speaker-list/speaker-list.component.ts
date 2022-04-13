import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/models/speaker';
import { SpeakerService } from 'src/app/speaker.service';


@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
})

export class SpeakerListComponent implements OnInit {
  query: string = '';

  constructor(public speakerService: SpeakerService) {
    
  }

  speakers:Speaker[] | null = null ;

  ngOnInit(): void {
    // this.speakerService.getAllSpeakers().subscribe(speakers => this.speakers = speakers);
    // console.log(this.speakers);
   this.load();
  }

  load(){
    this.speakerService.getAllSpeakers().subscribe(speakers => this.speakers = speakers);
    console.log(this.speakers);
  }

  deleteSpeaker(id: number) {
    this.speakerService.deleteSpeaker(id).subscribe(data => console.log(data)) ; 
    this.load();
    // for (
    //   let index = 0;
    //   index < this.speakerService.getAllSpeakers().length;
    //   index++
    // ) {
    //   if (this.speakerService.getAllSpeakers()[index]._id == id) {
    //     this.speakerService.getAllSpeakers().splice(index, 1);
    //     return;
    //   }
    // }
  }


  // editSpeaker(id: number) {
  //   // this.updateFlag = !this.updateFlag;
  //   // for (let index = 0; index < this.speakers.length; index++) {
  //   //   if (this.speakers[index]._id == id) {
  //   //     this.updateIndex = index;
  //   //     this.speaker = Object.assign({}, this.speakers[index]);
  //   //   }
  //   // }
  // }

  // showDetails(id: number)
  // {
  //   // this.detailsFlag = !this.detailsFlag;
  //   // for (let index = 0; index < this.speakers.length; index++) {
  //   //   if (this.speakers[index]._id == id) {
  //   //     this.updateIndex = index;
  //   //     this.speaker = Object.assign({}, this.speakers[index]);
  //   //   }
  //   // }
  // }

}

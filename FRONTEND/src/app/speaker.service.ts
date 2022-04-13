import { Injectable } from '@angular/core';
import { Speaker } from './models/speaker';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpeakerService {

  baseurl:string = "http://127.0.0.1:8080/speakers/";

  private speakers:Speaker[]=[];

  // addSpeaker(speaker:Speaker){

  //   console.log("ADD SPEAKERS CALLED");
  //   return this.http.post<Speaker>(this.baseurl,speaker);

  // }

  //ADD WITH file image 
  addSpeaker(speaker:Speaker,file:File){

    let form:FormData=new FormData();//setting enctype : multipart/formdata
    form.append("_id",speaker._id.toString());
    form.append("name",speaker.name);
    form.append("address",speaker.address);
    form.append("rating",speaker.rating.toString());
    form.append("bdate",speaker.bdate.toLocaleString());
    form.append("hourRate",speaker.hourRate.toString());
    form.append("isMarried",speaker.isMarried.toString());
    form.append("image",file,file.name);
    return this.http.post<Speaker>(this.baseurl,form);

  }

  getAllSpeakers(){
    // return this.speakers;
    console.log("GET ALL SPEAKERS CALLED")
    return this.http.get<Speaker[]>(this.baseurl);
  }

  deleteSpeaker(_id:number)
  {
    // return this.http.delete(this.baseurl,{_id});
    return this.http.request('delete', this.baseurl, { body: {_id} })
  }

  getSpeakerById(id: number) {
    return this.http.get<Speaker>(this.baseurl+id);
    // for (let i = 0; i < this.speakers.length; i++) {
    //   if (this.speakers[i]._id == id)
    //     return Object.assign({}, this.speakers[i]);
    // }

    // return new Speaker(0, '', '', '', new Date(), 0, false, 5);
 
  }

  setSpeakerById(id:number,speaker:Speaker,file:File)
  {
    let form:FormData=new FormData();//setting enctype : multipart/formdata
    form.append("_id",speaker._id.toString());
    form.append("name",speaker.name);
    form.append("address",speaker.address);
    form.append("rating",speaker.rating.toString());
    form.append("bdate",speaker.bdate.toLocaleString());
    form.append("hourRate",speaker.hourRate.toString());
    form.append("isMarried",speaker.isMarried.toString());
    form.append("image",file,file.name);
    return this.http.put<Speaker>(this.baseurl,form);
    
    // for (let i = 0; i < this.speakers.length; i++) {
    //   if (this.speakers[i]._id == id)
    //   this.speakers[i] = Object.assign({}, speaker);
    // }
  }
  
  constructor(public http:HttpClient) { }
}

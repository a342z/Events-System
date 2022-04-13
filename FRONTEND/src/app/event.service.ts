import { HttpClient } from '@angular/common/http';
import { Inject,Injectable } from '@angular/core';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getAllEvents()
  {
    return this.http.get<Event[]>(this.baseurl)
  }

  addEvent(event:Event){
    return this.http.post<Event>(this.baseurl,event);
  }

  getServiceById(id: number) {
    return this.http.get<Event>(this.baseurl+id);
  }


  deleteEvent(_id:number)
  {
    return this.http.request('delete', this.baseurl, { body: {_id} })
  }


  constructor(public http: HttpClient,@Inject("baseUrl") public baseurl:string) {

    this.baseurl+="events/"; 
  }

  updateEvent(event:Event){
    return this.http.put<Event>(this.baseurl,event);
  }

}

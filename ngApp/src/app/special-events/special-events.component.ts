import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

specialEvents = []
  constructor(private eventService : EventService,
              private _router : Router) { }

 
  ngOnInit() {
    this.eventService.getSpecialEvents()
    .subscribe(
      res => this.specialEvents = res,
      err =>{
          console.log(err)
          if(err instanceof HttpErrorResponse){
            if(err.status === 401) {
              this._router.navigate(['/login'])

            }

          }
      } 
    )
  }

}

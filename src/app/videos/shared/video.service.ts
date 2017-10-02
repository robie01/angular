///<reference path="video.model.ts"/>
import { Injectable } from '@angular/core';
import {Video} from './video.model';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operator/map';

@Injectable()
export class VideoService {

  constructor(private http: Http) { }

  getVideos(): Observable<Video[]> {
    return this.http.
      get('http://localhost:5000/api/video').
    map(resp => resp.json() as Video[]);
  }
}

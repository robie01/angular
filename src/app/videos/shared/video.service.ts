///<reference path="video.model.ts"/>
import { Injectable } from '@angular/core';
import {Video} from './video.model';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const url = environment.restApiEndpoint + '/video';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>
      (url);
  }
  getVideosById(id: number): Observable<Video> {
    console.log('id: ' + id);
      return this.http
        .get<Video>
        ( url + '/' + id);


  }


  delete(id: number): Observable<Video> {
    return this.http
      .delete(url + '/' + id);
  }

  create(video: Video): Observable<Video> {
    return this.http
    // the <Video> is the object you want to return back into the front end system.
      .post<Video>(url, video);
  }
}

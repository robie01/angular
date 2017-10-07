///<reference path="video.model.ts"/>
import { Injectable } from '@angular/core';
import {Video} from './video.model';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operator/map';
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
      return this.http
        .get<Video>
        ( url + id);

  }
}

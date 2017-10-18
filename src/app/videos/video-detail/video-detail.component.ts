import {Component, OnInit} from '@angular/core';
import {Video} from '../shared/video.model';
import {VideoService} from '../shared/video.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  video: Video;

  constructor(private videoService: VideoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.videoService.getVideosById(+params.get('id')))
      .subscribe(video => this.video = video);


    /*this.route.paramMap.subscribe(params => {
      this.videoService.getVideosById(+params.get('id'))
        .subscribe(video => this.video = video);
    });*/


  }

}

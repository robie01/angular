import { Component, OnInit } from '@angular/core';
import {VideoService} from '../shared/video.service';
import {Video} from '../shared/video.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[];

  // inside parameter is the dependency injection.
  constructor(private videoService: VideoService,
              private router: Router) {

  }

  ngOnInit() {
    // Ask for a bunch of code to execute
    this.videoService.getVideos().

    // executing the code and explaining when done , let me know
    subscribe(
      videos =>
      {
        this.videos = videos;
      }
    );

    // this.videoFromVideoComponentTs = {title: 'Computer Science', about: 'security'};

  }

  details(video: Video) {
    this.router.navigateByUrl('/video/' + video.id)
   // console.log('clicked' + video.id);

  }

}

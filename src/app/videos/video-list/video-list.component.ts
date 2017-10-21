import { Component, OnInit } from '@angular/core';
import {VideoService} from '../shared/video.service';
import {Video} from '../shared/video.model';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operator/switchMap';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[];
  videoToDelete: Video;

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

    // this.videoFromVideoComponentTs = {title: 'Computer Science', genres: 'security'};

  }

  details(video: Video) {
    console.log('details clicked');
    this.router.navigateByUrl('/video/' + video.id);
   // console.log('clicked' + video.id);

  }
  delete(video: Video, event) {
    console.log('delete clicked');
    this.videoToDelete = video;
    event.stopPropagation();
  }
  deleteAborted(event) {
    this.videoToDelete = null;
    event.stopPropagation();

  }
  deleteConfirm($event) {
    this.videoService.delete(this.videoToDelete.id)
      .switchMap(video => this.videoService.getVideos())
        .subscribe(videos => {
          this.videos = videos;
        });
    $event.stopPropagation();


     /* .subscribe(video => {
          this.videoService.getVideos()
            .subscribe(videos => {
            this.videos = videos;
            });
      });*/

  }
  createVideo() {
    this.router.navigateByUrl('/videos/create');
  }
}

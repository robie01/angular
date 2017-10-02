import { Component } from '@angular/core';
import {Video} from './videos/shared/video.model';
import {VideoService} from './videos/shared/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos: Video[];

  // inside parameter is the dependency injection.
  constructor(private videoService: VideoService) {

    // Ask for a bunch of code to execute
     videoService.getVideos().

     // executing the code and explaining when done , let me know
     subscribe(
       videos =>
       {
         this.videos = videos;
       }
     );

    // this.videoFromVideoComponentTs = {title: 'Computer Science', about: 'security'};
  }

}

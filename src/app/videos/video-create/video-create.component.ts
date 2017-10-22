import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {VideoService} from '../shared/video.service';
import {Video} from '../shared/video.model';


@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  videoGroup: FormGroup;
  videoCreatedSuccessfully= false;

  constructor(private router: Router, private fb: FormBuilder,
              private videoService: VideoService) {
    this.videoGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
    });

  }

  ngOnInit() {
  }
  back() {
    this.router.navigateByUrl('/videos');
  }
  closeAlert() {
    this.videoCreatedSuccessfully = false;
  }
  save() {
    //videoService
    const values = this.videoGroup.value;
    const video: Video = {
      title: values.title,
      genres: []
    };
    this.videoService.create(video)
      .subscribe(videoo => {
        this.videoGroup.reset();
        this.videoCreatedSuccessfully = true;
        setTimeout(() =>{
          this.videoCreatedSuccessfully = false;
        }, 3000);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  videoGroup: FormGroup;

  constructor(private router: Router) {
    this.videoGroup = new FormGroup({
      title: new FormControl(),
      about: new FormControl()
    });
  }

  ngOnInit() {
  }
  back() {
    this.router.navigateByUrl('/videos');
  }

}

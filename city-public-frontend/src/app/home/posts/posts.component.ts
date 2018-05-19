import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private _postsService: PostService) { }

  ngOnInit() {
    this._postsService.selectedCity.subscribe(console.log);
  }

}

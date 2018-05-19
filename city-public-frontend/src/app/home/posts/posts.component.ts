import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private _postsService: PostService) { }

  ngOnInit() {
    this._postsService.selectedCity.subscribe((city: string) => {
      this.posts$ = this._postsService.getAllPosts(city);
    });
  }

}

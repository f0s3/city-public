import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../services/post.service";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

@Component({
  selector: 'app-post-by-category',
  templateUrl: './post-by-category.component.html',
  styleUrls: ['./post-by-category.component.scss']
})
export class PostByCategoryComponent implements OnInit {
  category: string;
  posts$: Observable<Post[]>;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.category = params['category'];
      this._postService.getAllByCategory(this.category);
      this.posts$ = this._postService.posts$;
    })
  }

  hasPosts(posts: Post[]) {
    return posts.length !== 0
  }
}

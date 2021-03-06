import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../models/Post";
import {ActivatedRoute} from "@angular/router";

const DEFAULT_USER_PHOTO = '../../assets/images/default-user-logo.png';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(
    private _postService: PostService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(param => {
      const postId: number = +param['id'];
      this._postService.getById(postId).subscribe((post: Post) => this.post = post);
    })
  }

  getUserPhoto(): string {
    const photo = this.post.userInfo.photo;
    return (photo) ? photo : DEFAULT_USER_PHOTO;
  }

  getDate(): string {
    return new Date(this.post.time).toDateString()
  }
}

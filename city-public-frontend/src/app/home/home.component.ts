import { Component, OnInit } from '@angular/core';
import {categories, PostService} from "../services/post.service";
import {Post} from "./models/Post";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = categories;
  private posts: Post[];


  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this._postService.selectedCity.subscribe((city: string) => {
      this._postService.getAllPosts(city)
        .subscribe((posts: Post[]) => this.posts = posts);
    })
  }

  getPostsByCategory(cat: string): Post[] {
    return this.posts.filter((post: Post) => post.category === cat);
  }
}

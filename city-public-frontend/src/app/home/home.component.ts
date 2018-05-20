import {Component, OnInit} from '@angular/core';
import {categories, PostService} from "../services/post.service";
import {Post} from "../models/Post";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = categories;
  isLoading = false;
  private posts: Post[] = [];


  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this._postService.updateEvents$.subscribe(() => {
      this._postService.getAllPosts().subscribe((posts: Post[]) => {
        this.posts = posts;
        this.isLoading = false;
      });
    });
  }

  getPostsByCategory(cat: string): Post[] {
    const posts = this.posts.filter((post: Post) => post.category === cat);
    if (posts.length > 2) {
      return posts.slice(0, 2)
    }
    return posts
  }

  getLastPost(): Post {
    const lastIndex: number = this.posts.length - 1;
    return this.posts[lastIndex];
  }

  getTopPostStyles(lastPost: Post) {
    return {
      'background': 'url(' + lastPost.url[0] + ') no-repeat center',
      'background-size': 'cover'
    }
  }
}

import {Component, Input} from '@angular/core';
import {Post} from "../models/Post";
import {Category} from "../models/Category";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  @Input() posts: Post[];
  @Input() category: Category;

  getPostBG(url: string) {
    return {
      'background': 'url(' + url +') no-repeat center bottom',
      'background-size': 'cover'
    }
  }

  hasCategory(): boolean {
    return Boolean(this.category);
  }
}

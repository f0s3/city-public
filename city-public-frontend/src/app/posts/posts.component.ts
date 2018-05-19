import {Component, Input} from '@angular/core';
import {Post} from "../home/models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  @Input() posts: Post[];
  @Input() title: string;
}

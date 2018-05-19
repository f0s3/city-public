import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {of} from "rxjs/observable/of";

const API_URL: string = environment.apiUrl;
const POSTS_URL: string = `${API_URL}/posts`;

export const categories = [
  {key: 'culture', name: 'Culture'},
  {key: 'work', name: 'Work'},
  {key: 'politics', name: 'Politics'},
  {key: 'science', name: 'Science'}
];

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) { }

  public selectedCity: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public getAllPosts(city: string): Observable<Post[]> {
    return of(posts)///this._http.get<Post[]>(POSTS_URL);
  }

  getAllByCategory(category: string): Observable<Post[]> {
    return of(posts.filter((post: Post) => post.category === category));
  }
}

const posts = [
  {post_id: 1, title: 'hello', category: 'culture', url: '../../assets/images/page-backgrounds/day.jpg'},
  {post_id: 2, title: 'hello', category: 'culture', url: '../../assets/images/page-backgrounds/day.jpg'},
  {post_id: 3, title: 'hello', category: 'culture', url: '../../assets/images/page-backgrounds/day.jpg'},
  {post_id: 4, title: 'hello', category: 'science', url: '../../assets/images/page-backgrounds/day.jpg'}
] as Post[];

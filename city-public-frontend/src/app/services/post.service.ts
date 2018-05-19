import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

import {of} from "rxjs/observable/of";

const API_URL: string = environment.localApiUrl;
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
    return of(
      [
        {id: 1, title: 'hello', category: 'culture', media: [{url: '../../assets/images/page-backgrounds/day.jpg'}]},
        {id: 2, title: 'hello', category: 'culture', media: [{url: '../../assets/images/page-backgrounds/day.jpg'}]},
        {id: 3, title: 'hello', category: 'culture', media: [{url: '../../assets/images/page-backgrounds/day.jpg'}]},
        {id: 4, title: 'hello', category: 'science', media: [{url: '../../assets/images/page-backgrounds/day.jpg'}]}
      ] as Post[]
    );
  }
}

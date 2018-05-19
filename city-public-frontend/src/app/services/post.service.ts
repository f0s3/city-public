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
  'Culture',
  'Work',
  'Politics',
  'Science'
];

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) { }

  public selectedCity: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public getAllPosts(city: string): Observable<Post[]> {
    return of(
      [
        {id: 1, title: 'hello', category: 'Culture'},
        {id: 2, title: 'hello', category: 'Culture'},
        {id: 3, title: 'hello', category: 'Culture'},
        {id: 4, title: 'hello', category: 'Science'}
      ] as Post[]
    );
  }
}

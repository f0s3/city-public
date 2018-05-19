import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

import {environment} from "../../../environments/environment";

import {of} from "rxjs/observable/of";

const API_URL: string = environment.localApiUrl;
const POSTS_URL: string = `${API_URL}/posts`;

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) { }

  public getAllPosts(city: string): Observable<Post[]> {
    return of(
      [
        {title: 'hello'}, {title: 'hello'}
      ] as Post[]
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

const API_URL: string = environment.apiUrl;
const POSTS_URL: string = `${API_URL}/posts`;

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) { }

  public selectedCity: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public getAllPosts(country: string, city: string): Observable<Post[]> {
    return this._http.get<Post[]>(POSTS_URL);
  }
}

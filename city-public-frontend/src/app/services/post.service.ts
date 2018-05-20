import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

import {environment} from "../../environments/environment";
import "rxjs/add/operator/map";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

const API_URL: string = environment.apiUrl;
const POSTS_URL: string = `${API_URL}/posts`;

const CURRENT_USER_ID = 2;

export const categories = [
  {key: 'culture', name: 'Culture'},
  {key: 'work', name: 'Work'},
  {key: 'politics', name: 'Politics'},
  {key: 'science', name: 'Science'}
];

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) {
  }

  updateEvents$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public getAllPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(POSTS_URL);
  }

  getAllByCategory(category: string): Observable<Post[]> {
    return this.getAllPosts().map((posts: Post[]) => posts.filter((post: Post) => post.category === category));
  }

  getById(postId: number): Observable<Post> {
    return this._http.get<Post>(`${POSTS_URL}/${postId}`);
  }

  create(post: Post): Promise<any> {
    return this._http.post(POSTS_URL, {...post, user_id: CURRENT_USER_ID}).toPromise()
  }
}

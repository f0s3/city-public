import {Injectable} from '@angular/core';
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

  constructor(private _http: HttpClient) {
  }

  public selectedCity: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public getAllPosts(city: string): Observable<Post[]> {
    return of(posts)///this._http.get<Post[]>(POSTS_URL);
  }

  getAllByCategory(category: string): Observable<Post[]> {
    return of(posts.filter((post: Post) => post.category === category));
  }

  getById(postId: number): Observable<Post> {
    return of(posts.find((post: Post) => post.id === postId)) ///this._http.get<Post>(POSTS_URL);
  }
}

const posts = [
  {
    id: 1,
    title: 'hello',
    category: 'culture',
    time: new Date().toDateString(),
    user: {nickname: 'Alex'},
    url: '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
    media: [
      {
        url: '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
        type: 'photo'
      },
      {
        url: '../../assets/images/page-backgrounds/day.jpg',
        type: 'photo'
      },
      {
        url: '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
        type: 'photo'
      }
    ]
  },
  {
    id: 2,
    title: 'hello',
    category: 'culture',
    time: new Date().toDateString(),
    user: {nickname: 'Oleg'},
    url: '../../assets/images/page-backgrounds/day.jpg',
    media: [
      {
        url: '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
        type: 'photo'
      },
      {
        url: '../../assets/images/page-backgrounds/day.jpg',
        type: 'photo'
      }
    ]
  },
  {
    id: 3,
    title: 'hello',
    category: 'culture',
    time: new Date().toDateString(),
    user: {nickname: 'Hideo'},
    url: '../../assets/images/page-backgrounds/day.jpg',
    media: [
      [
        {
          url: '../../assets/images/page-backgrounds/day.jpg',
          type: 'photo'
        }
      ]
    ]
  },
  {
    id: 4,
    title: 'hello',
    category: 'science',
    time: new Date().toDateString(),
    user: {nickname: 'Jon'},
    url: '../../assets/images/page-backgrounds/day.jpg',
    media: [
      [
        {
          url: '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
          type: 'photo'
        }
      ]
    ]
  }
] as Post[];

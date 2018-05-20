import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

import {environment} from "../../environments/environment";
import {of} from "rxjs/observable/of";
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

const postDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ' +
  'consequuntur corporis dicta, doloremque ea eos ipsa minima, modi nam nesciunt nostrum obcaecati quae quia quos rerum ' +
  'soluta tempora vero. Accusantium cumque dignissimos distinctio dolor dolores doloribus eaque earum eius expedita, ' +
  'fugiat harum illum inventore iste iure laudantium libero, maxime minus omnis placeat possimus quae reiciendis ' +
  'similique temporibus ullam voluptatibus. Ad aut autem beatae consequatur, debitis dolor, dolore ducimus eligendi ' +
  'error facilis impedit natus neque omnis optio praesentium repellendus unde vero! A excepturi ipsum perspiciatis ' +
  'praesentium repellendus, tempora voluptate voluptatibus! Aut, blanditiis culpa dolorem enim esse ex id ipsum ' +
  'laudantium, nam officia provident quae quia reprehenderit saepe tempora. Aperiam consectetur enim laboriosam minima ' +
  'nam nesciunt non officia quis unde voluptas. Accusamus corporis delectus dolores exercitationem expedita hic ipsum ' +
  'laboriosam libero, maiores minima neque non obcaecati officia pariatur quas recusandae rem sapiente sint tempore velit. ' +
  'Esse illo possimus repellat tempora voluptatum! Aliquam deleniti eaque quod soluta tenetur. Ab ad, alias aperiam at ' +
  'culpa ducimus fugiat ipsa iusto magnam obcaecati odio perspiciatis quae vel velit veniam voluptatibus voluptatum? ' +
  'Iste quisquam repudiandae soluta. Accusamus aliquam aspernatur deleniti dicta dignissimos distinctio ducimus ea enim ' +
  'eum facere harum illum minima minus numquam odio perferendis praesentium quae qui quia quo quod sed sunt tempora, ' +
  'tenetur ullam! A amet blanditiis dicta dolores doloribus enim esse, expedita fugiat id impedit ipsam iure natus non ' +
  'nostrum numquam odit officia quas saepe similique sit tempora ullam vel veritatis voluptas voluptates! Assumenda ' +
  'beatae corporis cumque cupiditate delectus dolor doloribus dolorum inventore labore reprehenderit. Aut, cumque ' +
  'doloremque error impedit in, maiores minus modi nam odit perspiciatis praesentium temporibus voluptas voluptate ' +
  'voluptatem voluptates. Incidunt porro, quas? Atque, aut autem cupiditate doloribus est illo impedit incidunt ' +
  'laboriosam laborum magni nesciunt, numquam sit tenetur totam veniam. Dolorem eius natus quas quos recusandae repellat' +
  ' saepe similique.';

const posts = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    category: 'culture',
    time: new Date().toDateString(),
    userInfo: {nickname: 'Alex'},
    url: [
      '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
      '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
      '../../assets/images/page-backgrounds/day.jpg',
      '../../assets/images/7p_2hzkryqe-luis-llerena.jpg'
    ],
    description: postDescription
  },
  {
    id: 2,
    title: 'Ab alias aperiam cumque ea eius enim, facere modi mollitia, placeat possimus quos sunt voluptatibus!',
    category: 'culture',
    time: new Date().toDateString(),
    userInfo: {nickname: 'Oleg'},
    url: [
      '../../assets/images/page-backgrounds/day.jpg',
      '../../assets/images/7p_2hzkryqe-luis-llerena.jpg'
    ],
    description: postDescription
  },
  {
    id: 3,
    title: 'Fugiat nulla obcaecati omnis perspiciatis? Esse, officia.',
    category: 'culture',
    time: new Date().toDateString(),
    userInfo: {nickname: 'Hideo'},
    url: [
      '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
    ],
    description: postDescription
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    category: 'science',
    time: new Date().toDateString(),
    userInfo: {nickname: 'Jon'},
    url: [
      '../../assets/images/7p_2hzkryqe-luis-llerena.jpg',
      '../../assets/images/page-backgrounds/day.jpg'
    ],
    description: postDescription
  }
] as Post[];

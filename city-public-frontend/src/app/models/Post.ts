import {User} from "./User";
import {Media} from "./Media";

export class Post {
  post_id: number;
  user: User;
  title: string;
  description: string;
  media: Media[];
  time: string;
  category: string;
  url?: string;
}

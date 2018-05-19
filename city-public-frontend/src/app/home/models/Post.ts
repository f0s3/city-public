import {User} from "./User";
import {Media} from "./Media";

export class Post {
  user: User;
  title: string;
  description: string;
  media: Media[];
  time: number;
  category: string
}

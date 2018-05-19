import {User} from "./User";
import {Media} from "./Media";

export class Post {
  id: number;
  user: User;
  title: string;
  description: string;
  media: Media[];
  time: number;
  category: string
}

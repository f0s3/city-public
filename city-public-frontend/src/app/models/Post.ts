import {User} from "./User";

export class Post {
  id: number;
  userInfo: User;
  title: string;
  description: string;
  time: string;
  category: string;
  url?: string[];
}

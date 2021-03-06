import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";
import {PostByCategoryComponent} from "./post-by-category/post-by-category.component";

export const appRoutes: Routes = [
  {
    path: 'dashboard', children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'posts/:id', component: PostComponent},
      {path: 'categories/:category/posts', component: PostByCategoryComponent}
    ]
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

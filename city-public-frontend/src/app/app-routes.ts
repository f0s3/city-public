import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./home/posts/posts.component";

export const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', component: PostsComponent}
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

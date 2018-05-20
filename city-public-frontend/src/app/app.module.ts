import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routes";
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import {PostService} from "./services/post.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostComponent } from './post/post.component';
import { PostByCategoryComponent } from './post-by-category/post-by-category.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {ModalModule} from "ngx-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    PostByCategoryComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

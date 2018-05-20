import {Component} from '@angular/core';
import {categories, PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories = categories;
  isDisplayedMenu = true;

  constructor(private _postService: PostService) {}

  getMenuButtonClass(): string {
    return (this.isDisplayedMenu === true) ? 'menu-active' : 'menu';
  }

  getMenuItemsClass() {
    return (this.isDisplayedMenu === true) ? 'menu-item-show' : 'menu-item';
  }

  openMenu() {
    this.isDisplayedMenu = !this.isDisplayedMenu;
  }

  updateData() {
    this._postService.updateEvents$.next(null);
  }
}

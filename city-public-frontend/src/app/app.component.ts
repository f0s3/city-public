import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {categories, PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cityForm: FormGroup;
  categories = categories;

  constructor(fb: FormBuilder, private _postService: PostService) {
    this.cityForm = fb.group({
      city: ''
    })
  }

  ngOnInit() {
    this.cityForm.valueChanges.subscribe((city: string) => {
      this._postService.selectedCity.next(city);
    })
  }
}

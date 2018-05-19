import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {filter, map} from "rxjs/operators";
import {PostService} from "./services/post.service";

class Location {
  country: string;
  city: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  locationForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private _postService: PostService
  ) {
    this.locationForm = formBuilder.group({
      country: '',
      city: ''
    });
  }

  ngOnInit() {
    this.locationForm.valueChanges.pipe(
      map((location: Location) => location.city),
      filter((city: string) => Boolean(city))
    ).subscribe((city: string) => this._postService.selectedCity.next(city));
  }

}

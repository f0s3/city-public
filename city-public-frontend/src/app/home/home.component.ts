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

  ngOnInit() {
  }

}

import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {categories, PostService} from "../services/post.service";
import {Post} from "../models/Post";
import {Category} from "../models/Category";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements IAppModal, OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('modal') modal: ModalDirective;
  form: FormGroup;

  categories: Category[] = [];

  constructor(fb: FormBuilder, private _postService: PostService) {
    this.form = fb.group({
      title: '',
      description: '',
      category: '',
      url: new FormArray([
        new FormControl()
      ])
    })
  }

  ngOnInit() {
    this.categories = categories;
  }

  get photos(): FormArray {
    return this.form.get('url') as FormArray;
  }


  addUrlField() {
    this.photos.push(new FormControl());
  }

  show() {
    this.modal.show();
  }

  hide() {
    this.form.reset();
    this.modal.hide();
  }

  submit() {
    this._postService.create(this.form.getRawValue() as Post)
      .then(() => this.onSubmit.emit(null))
      .then(() => this.form.reset())
      .then(() => this.modal.hide());
  }
}

export interface IAppModal {
  modal: ModalDirective;
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, IAppModal {
  @ViewChild('modal') modal: ModalDirective;
  form: FormGroup;

  constructor(fb: FormBuilder) {
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
    this.form.valueChanges.subscribe(console.log)
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
    this.modal.hide();
  }

  submit() {
    this.modal.hide();
  }
}

export interface IAppModal {
  modal: ModalDirective;
}

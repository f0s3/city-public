import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, IAppModal {
  @ViewChild('modal') modal: ModalDirective;

  constructor() { }

  ngOnInit() {
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

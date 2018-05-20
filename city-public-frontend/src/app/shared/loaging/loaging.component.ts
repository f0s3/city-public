import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loaging',
  templateUrl: './loaging.component.html',
  styleUrls: ['./loaging.component.scss']
})
export class LoagingComponent implements OnInit {
  @Input() size: number;
  constructor() { }

  ngOnInit() {
  }

}

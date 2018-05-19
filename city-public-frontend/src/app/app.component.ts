import {Component} from '@angular/core';

const START_DAY: number = 7;
const END_DAY: number = 22;
const BG_DAY: string = 'day';
const BG_NIGHT: string = 'night';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getBodyBGClass(): string {
    const hour: number = new Date().getHours();
    return (hour > START_DAY && hour < END_DAY) ? BG_DAY : BG_NIGHT;
  }
}

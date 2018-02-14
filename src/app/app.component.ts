import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoUrl:string = '../assets/Images/moneyfly24.mp4';
  ngOninit(){

    this.videoUrl;
  }
  
}

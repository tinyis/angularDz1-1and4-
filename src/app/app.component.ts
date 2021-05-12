import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'massiv';
  constructor(){

    this.stroki=["If you think your teacher is tough, wait till you get a boss",
                "Life is not fair — get used to it!",
                "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
                "Be nice to nerds. Chances are you’ll end up working for one"];
  }

  stroki:string[];
}

import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements  OnInit, OnDestroy{
  title = 'App country guys';

  ngOnInit() {
    this.getLocalStorageData()
  }

  getLocalStorageData():void{
    console.log("This is the render primary")
  }

  ngOnDestroy() {
    console.log("This is the destroy all things")
  }
}

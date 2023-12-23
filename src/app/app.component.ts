import { Component, OnInit } from '@angular/core';

declare var require: any;

var meta = require('../assets/meta.json');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = meta.title;
  MetaJson:any;
  url: string = '/assets/meta.json';
  
  constructor() {}

  ngOnInit() {
    console.log(meta)
    console.log(this.title)
  }
}
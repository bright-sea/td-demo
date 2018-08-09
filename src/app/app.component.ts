import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'account';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBQGhfsUdwxpU_olmmgc4urYTTHKBXeREU",
      authDomain: "td-demo-2ed10.firebaseapp.com"
     });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

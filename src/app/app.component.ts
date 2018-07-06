import { Component, OnInit } from '@angular/core';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  async ngOnInit() {
    const MODEL_URL = '/weights';

    await faceapi.loadModels(MODEL_URL);
  }
}

import { MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.routes';

import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';


const MATERIAL_IMPORTS = [MatToolbarModule, MatCardModule, MatInputModule];

@NgModule({
  declarations: [AppComponent, TrainingComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ...MATERIAL_IMPORTS, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Routes } from '@angular/router';
import { TrainingComponent } from 'src/app/training/training.component';

export const APP_ROUTES: Routes = [
  { path: 'train', component: TrainingComponent },
  { path: '',
    redirectTo: '/train',
    pathMatch: 'full'
  },
];

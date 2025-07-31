import { Routes } from '@angular/router';
import { PreRegistrationTaskComponent } from './pre-registration-task/pre-registration-task.component';

export const routes: Routes = [
    {
        path:'pre-registration-task',
        component: PreRegistrationTaskComponent,

    },
    {
        path:'',
        redirectTo: 'pre-registration-task',
        pathMatch: 'full'

    }
];

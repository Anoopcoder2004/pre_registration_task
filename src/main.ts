import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PreRegistrationTaskComponent } from './app/pre-registration-task/pre-registration-task.component';

bootstrapApplication(PreRegistrationTaskComponent, appConfig)
  .catch((err) => console.error(err));

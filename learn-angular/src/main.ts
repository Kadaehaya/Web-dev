import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Step2 as AppComponent } from './app/anatomy'; 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
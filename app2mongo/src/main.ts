<<<<<<< HEAD
=======
/// <reference types="@angular/localize" />

>>>>>>> f97bb84e9a6926807ec029d7d628f3a136a96e8b
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

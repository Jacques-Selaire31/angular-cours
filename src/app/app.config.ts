import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({ projectId: "fir-angular-c70bd", appId: "1:801209190298:web:8ea6d94daf30527dbf9c23", databaseURL: "https://fir-angular-c70bd-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "fir-angular-c70bd.firebasestorage.app", apiKey: "AIzaSyBQRDkMs3NGkoChdfkLET5trP5o1n-9XVI", authDomain: "fir-angular-c70bd.firebaseapp.com", messagingSenderId: "801209190298" })), provideAuth(() => getAuth()), provideDatabase(() => getDatabase())
  ]
};

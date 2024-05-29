import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), provideFirebaseApp(() => initializeApp({"projectId":"biblioteca-769d0","appId":"1:856893507168:web:bfd7010b1cb0315b0a6505","storageBucket":"biblioteca-769d0.appspot.com","apiKey":"AIzaSyCeRTtXzGX6rRxkeKZAcN1buWNJ6eK6Qns","authDomain":"biblioteca-769d0.firebaseapp.com","messagingSenderId":"856893507168"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};

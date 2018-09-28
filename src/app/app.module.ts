import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConexionService } from './services/conexion.service'

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { MuroComponent } from './components/muro/muro.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MuroComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule 
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chat } from '../interfaces/chat.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Chat>;
  chats: Chat[] = [];
  usuario: any;
  constructor(private afs: AngularFirestore, public afa: AngularFireAuth) {
    this.afa.authState.subscribe(user => {
      console.log('Se cambio los datos de login ahora es ' + user);
      if (user != null) {
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      }
    });
   }

  login() {
    this.afa.auth.signInWithPopup(new auth.GithubAuthProvider);
  }
  logout() {
    this.afa.auth.signOut();
    this.usuario = null;
  }

  cargarMensajes(): Observable<Chat[]> {
   // this.itemsCollection = this.afs.collection<Chat>('chats');
   this.itemsCollection = this.afs.collection<Chat>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));
    /*this.itemsCollection.valueChanges().subscribe((datos: Chat[]) => {
      console.log(datos);
      return datos;
    });*/
    return this.itemsCollection.valueChanges();
  }

  agregarMensaje(texto: string) {
    const mensaje: Chat = {
      nombre: 'German Kuchen',
      mensaje: texto,
      fecha: new Date().getTime()
    };
    return this.itemsCollection.add(mensaje);
  }

}

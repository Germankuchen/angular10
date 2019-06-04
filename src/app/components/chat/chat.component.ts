import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { Chat } from '../../interfaces/chat.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string;
  componente: any;
  chats: Chat[];

  enviarMensaje() {
    console.log('Agrengando ' + this.mensaje);
    this._chatService.agregarMensaje(this.mensaje)
      .then(info => {
        console.log(info);
        this.mensaje = '';
      })
      .catch(error => console.log(error));
  }

  constructor(private _chatService: ChatService) {
    console.log('Aca invocamos el servicio');
    this._chatService.cargarMensajes().subscribe((datos: Chat[]) => {
      console.log('Los chats son: ' + this.chats);
      this.chats = [];
      for (const chat of datos) {
        this.chats.unshift(chat);
      }
      setTimeout(() => {
        this.componente.scrollTop = this.componente.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.componente = document.getElementById('app-mensajes');
  }

}

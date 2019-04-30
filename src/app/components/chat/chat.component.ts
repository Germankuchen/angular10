import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string;
  info: any[];

  enviarMensaje() {
    console.log('Agrengando ' + this.mensaje);
  }

  constructor(private _chatService: ChatService) {
    console.log('Aca invocamos el servicio');
    this.info = this._chatService.cargarMensajes();
  }

  ngOnInit() {
  }

}

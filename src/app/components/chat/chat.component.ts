import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string;

  enviarMensaje() {
    console.log('Agrengando ' + this.mensaje);
  }

  constructor() { }

  ngOnInit() {
  }

}

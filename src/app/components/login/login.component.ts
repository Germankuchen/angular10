import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private _cs: ChatService) { }

  ingresar() {
    console.log('Presiono ingresar');
    this._cs.login();
  }

  ngOnInit() {
  }

}

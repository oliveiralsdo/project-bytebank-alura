import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-angular-alura';
  
  constructor(private service: TransferenciaService) {}

  transferir($event) {
    this.service.adicionar($event);

  }
}

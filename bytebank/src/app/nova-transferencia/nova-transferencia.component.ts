import { TransferenciaService } from './../services/transferencia.service';

import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){}

  transferir() {
    const valoresEmitir: Transferencia = { valor: this.valor, destino: this.destino};

    this.service.adicionar(valoresEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    error => alert(error));

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}


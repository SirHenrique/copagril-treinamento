import { Component, Input, OnInit } from '@angular/core';
import { Opcoes, VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-setor-solicitante',
  templateUrl: './setor-solicitante.component.html',
  styleUrls: ['./setor-solicitante.component.scss']
})
export class SetorSolicitanteComponent implements OnInit {
  @Input() vp!: VP_BPM
  opcoes!: Opcoes[];
  selectedCity: Opcoes | undefined;
 ngOnInit() {
  this.opcoes = [
    {
      name: 'Industrias',
      code: '1'
    },
    {
      name: 'Loja',
      code: '2'
    },
    {
      name: 'RH',
      code: '3'
    },
    {
      name: 'TI',
      code: '4'
    },
    {
      name: 'Auditoria',
      code: '5'
    },
   ]
 }

}

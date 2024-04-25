import { Component, Input, OnInit } from '@angular/core';
import { Opcoes, VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-aprovacao-ti',
  templateUrl: './aprovacao-ti.component.html',
  styleUrls: ['./aprovacao-ti.component.scss']
})
export class AprovacaoTiComponent implements OnInit {
  @Input() vp!: VP_BPM

  opcoes!: Opcoes[];

  ngOnInit() {
    this.opcoes = [
      {
        name: 'Aprovado',
        code: 'S'
      },
      {
        name: 'Reprovado',
        code: 'N'
      },
     ]
   }

   public aparecerJustificativa() {
    if(this.vp.opcaoTI!.code == 'N')
    this.vp.hideJustificativa = false;
    else {
      this.vp.hideJustificativa = true;
    }
   }



}

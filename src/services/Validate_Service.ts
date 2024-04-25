import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Validate_Service {
  private readonly STEP = environment.tarefa();
  private messages: Message[] = [];
  constructor(private ms: MessageService){}

  public validate(vp: VP_BPM) {
    switch (this.STEP) {
      case environment.s1_etapa1:
        if(vp.codFil == 0){
          this.ms.add({
            severity: 'warn',
            summary: 'Selecione uma Filial!',
            detail: 'Favor Selecionar uma Filial para Prosseguir',
          });
        }

        if(vp.comentarios.length == 0){
          this.ms.add({
            severity: 'warn',
            summary: 'Coloque um Comentário!',
            detail: 'Favor colocar pelo menos um comentário.',
          });
        }
        break;
        case environment.s2_etapa2:
          if(vp.opcaoTI!.code == 'N' && vp.justificativaTI == '') {
            this.ms.add({
              severity: 'warn',
              summary: 'Informe uma Justificativa!',
              detail: 'Favor informar uma Justificativa.',
            });
          }
          break;
      default:
        break;
    }
  }
}

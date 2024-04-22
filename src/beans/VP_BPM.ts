import { Message } from 'primeng/api';

import * as wsb from './WS_Beans';

// Crie aqui todas as váriaveis de processo
export interface ResponseLoadData {
  initial: number;
  tabs: number[];
  vp: VP_BPM;
}

export class VP_BPM {
  public overlay: boolean = true;
  public Buscando_WS: boolean = true;

  public alertas: Message[] = [];

  public token: string = '';
  public user_fullName: string = '';



  public show_servicos: wsb.Servicos[] = [];


}


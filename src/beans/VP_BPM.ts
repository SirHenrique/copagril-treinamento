import { Message } from 'primeng/api';

import * as wsb from './WS_Beans';

// Crie aqui todas as váriaveis de processo
export interface ResponseLoadData {
  initial: number;
  tabs: number[];
  vp: VP_BPM;
}

export interface Filiais {
  codFil: number
  apeFil: string
  nomFil: string
}

export interface Comentarios {
  nome: string
  comentario: string
}

export interface Opcoes {
  name: string,
  code: string
}

export class VP_BPM {
  public overlay: boolean = true;
  public Buscando_WS: boolean = true;

  public alertas: Message[] = [];

  public token: string = '';
  public user_fullName: string = '';
  public nome: string = '';
  public texto: string = ''
  public comentarios: Comentarios[] = []
  public comentarios_txt: string = '';
  public comentario!: Comentarios;
  public setorSolicitante: Opcoes | undefined;
  public setorSolicitante_txt: string = '';
  public filial_arr: Filiais[] = []
  public codFil: number = 0;
  public apeFil: string = '';
  public nomFil: string = '';
  public filial!: Filiais;
  public show_servicos: wsb.Servicos[] = [];

  public readOnlyFilial: boolean = false;
  public hideComentario: boolean = true;


}


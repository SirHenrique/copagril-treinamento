import { Comentarios } from './../beans/VP_BPM';
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeNGConfig, MessageService } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
// import formValidate from 'src/functions/Form_Validate';
import { Validate_Service } from '../services/Validate_Service'
import * as wc from 'src/functions/Workflow_Cockpit';
import { Data, Info } from 'src/beans/Workflow';
import axios from 'axios';
import { Messages } from 'primeng/messages';

declare var workflowCockpit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, Validate_Service],
})
export class AppComponent {
  @ViewChild(Messages) msg!: Messages;
  public title = 'ProjetoPadrao';

  checked: boolean = false;


  public activeMenu: MenuItem = {};

  public hideButtons: boolean = false;

  public vp: VP_BPM = new VP_BPM();

  constructor(
    public translate: TranslateService,
    public primeNGConfig: PrimeNGConfig,
    private formValidate: Validate_Service,
  ) {
    new workflowCockpit({
      init: this._loadData,
      onSubmit: this._saveData,
      onError: this._rollback,
    });

    translate.addLangs(['pt']);
    translate.setDefaultLang('pt');
    translate.use('pt');
    this.translate
      .stream('primeng')
      .subscribe((data) => this.primeNGConfig.setTranslation(data));
  }

  public ngOnInit(): void {
    axios.interceptors.request.use(
      (config: any) => {
        this.vp.Buscando_WS = true;
        return config;
      },
      (error: any) => {
        this.vp.Buscando_WS = false;
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response: any) => {
        this.vp.Buscando_WS = false;
        return response;
      },
      (error: any) => {
        this.vp.Buscando_WS = false;
        return Promise.reject(error);
      }
    );

    this.vp.Buscando_WS = false;

  }

  private _loadData = async (_data: Data, info: Info): Promise<void> => {
    const r = await wc.loadData(this.vp, info);
    this.vp = r.vp;
  };


  private _saveData = (_data: Data, _info: Info): any => {
    this.formValidate.validate(this.vp);
    console.log(this.msg)
    this.vp.alertas = this.msg.messages == null ? [] : this.msg.messages;
    if (this.vp.alertas.length > 0)
      throw Error('Os dados informados são inválidos.');
    else return wc.saveData(this.vp);
  };

  private _rollback = wc.rollback;

  public adicionarComentario() {
    console.log('ENTROU')
    let comentario: Comentarios = {
      nome: this.vp.nome,
      comentario: this.vp.texto
    }

    this.vp.comentarios.push(comentario)

    console.log(this.vp.comentarios);
    }
}

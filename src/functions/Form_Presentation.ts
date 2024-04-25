import { ResponseLoadData } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

export function getFormPresentation(rld: ResponseLoadData): ResponseLoadData {
  switch (STEP) {
    case environment.s1_etapa1:
      rld.vp.readonlySolicitante = false;
    break;
    case environment.s2_etapa2:
      rld.vp.hideComentario = false;
      rld.vp.readOnlyFilial = true;
      rld.vp.hideTI = false;
      rld.vp.readonlyAprovacao = false;
    break;
    case environment.s3_etapa3:
      rld.vp.hideTI = false;
      rld.vp.hideJustificativa = false;
    break;
  }

  return rld;
}

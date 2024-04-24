import { ResponseLoadData } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

export function getFormPresentation(rld: ResponseLoadData): ResponseLoadData {
  switch (STEP) {
    case environment.s1_etapa1:

    break;
    case environment.s2_etapa2:
      rld.vp.hideComentario = false;
      rld.vp.readOnlyFilial = true;
    break;
  }

  return rld;
}

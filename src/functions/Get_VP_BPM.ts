import { VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {
  vp.setorSolicitante_txt = map.get('setorSolicitante_txt');
  if(vp.setorSolicitante_txt)
    vp.setorSolicitante = JSON.parse(vp.setorSolicitante_txt);
  vp.apeFil = map.get('apeFil')
  vp.codFil = map.get('codFil')
  vp.nomFil = map.get('nomFil')
  vp.nome = map.get('nome')


  vp.comentarios_txt = map.get('comentarios_txt')
  if(vp.comentarios_txt)
    vp.comentarios = JSON.parse(vp.comentarios_txt)
  return vp;
}

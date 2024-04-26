import { ResponseLoadData, VP_BPM } from 'src/beans/VP_BPM';
import { Info } from 'src/beans/Workflow';
import { ws_beans_header } from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';
import { getFormPresentation } from './Form_Presentation';
import getVP from './Get_VP_BPM';
import { cadastraProjeto, exportaFiliais, exportaProdutos } from './WS_Axios';

const STEP = environment.tarefa();

declare var removeData: any;
declare var rollbackData: any;

async function loadData(vp: VP_BPM, info: Info): Promise<ResponseLoadData> {
  var rld: ResponseLoadData = { initial: 1, tabs: [1, 2, 3], vp };

  rld.vp.user_fullName = (await info.getUserData()).fullname;

  const ptd = await info.getPlatformData();
  rld.vp.token = `bearer ${ptd.token.access_token}`;
  ws_beans_header.headers!['Authorization'] = rld.vp.token;
  rld.vp.nome = rld.vp.user_fullName

  let body = {
    codEmp: 1
  }

  const r = await exportaFiliais(JSON.stringify(body));
  console.log(r)
  rld.vp.filial_arr = r.filiais

  const ipv = await info.getInfoFromProcessVariables();
  if (STEP !== environment.s1_etapa1) {
    var map: Map<any, any> = new Map();
    for (let i of ipv) map.set(i.key, i.value);
    rld.vp = getVP(rld.vp, map);
  }

  rld = getFormPresentation(rld);


  return rld;
}

async function saveData(vp: VP_BPM) {
  if(STEP == environment.s1_etapa1) {
    vp.setorSolicitante_txt = JSON.stringify(vp.setorSolicitante)
    vp.comentarios_txt = JSON.stringify(vp.comentarios)
  }
  if(STEP == environment.s2_etapa2) {
    vp.opcaoTI_txt = JSON.stringify(vp.opcaoTI);
    vp.aprovadoTI = vp.opcaoTI!.code;

    if(vp.aprovadoTI == 'S') {
      const body = {
        codEmp: 1,
        ind001:10,
        ind002: 9,
        ind003:9,
        ind004:10,
        numPrj:2070
      }


      const r = await cadastraProjeto(JSON.stringify(body));
    }
  }

  return { formData: vp };
}

function rollback(data: any, info: any): any {
  console.log(data.error);
  if (info.isRequestNew()) return removeData(data.processInstanceId);
  return rollbackData(data.processInstanceId);
}

export { loadData, saveData, rollback };

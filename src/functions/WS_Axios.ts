import axios, { AxiosResponse } from 'axios';
import * as wsb from 'src/beans/WS_Beans';



export const exportaProdutos = async ( body: string = '{}') =>
  (
    await axios.post<
      AxiosResponse<wsb.G5Response>,
      AxiosResponse<wsb.G5Response>
    >(
      `https://erphomolog.copagril.com.br:9596/SXI/G5Rest?server=https://erphomolog.copagril.com.br:9596&module=sapiens&service=com.prisma.bpm&port=ExportaProdutos&useAlwaysArray=true`,
      body,
      wsb.ws_beans_header
    )
  ).data;

  export const exportaFiliais = async ( body: string = '{}') =>
    (
      await axios.post<
        any,any
      >(
        `https://erphomolog.copagril.com.br:9596/SXI/G5Rest?server=https://erphomolog.copagril.com.br:9596&module=sapiens&service=com.prisma.bpm&port=ExportaFiliais&useAlwaysArray=true`,
        body,
        wsb.ws_beans_header
      )
    ).data;

    export const cadastraProjeto = async ( body: string = '{}') =>
      (
        await axios.post<
          any,any
        >(
          `https://erphomolog.copagril.com.br:9596/SXI/G5Rest?server=https://erphomolog.copagril.com.br:9596&module=sapiens&service=com.copagril.tarefas&port=IncluirIndicator&useAlwaysArray=true`,
          body,
          wsb.ws_beans_header
        )
      ).data;



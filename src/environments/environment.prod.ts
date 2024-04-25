export const environment = {
  production: true,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (error) {
      return error;
    }
  },
  url_padrao: window.location.origin ?? '',
  ged_papel: [
    {
      active: true,
      permissionLevel: 3,
      subject: 'admin',
      type: 'ROLE',
    },
  ],
  s1_etapa1: 'solicitacao',
  s2_etapa2: 'validacao',
  s3_etapa3: 'retorno'
};

export const environment = {
  production: false,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (error) {
      return error;
    }
  },
  databaseType: 'ORACLE',
  ged_papel: [
    {
      active: true,
      permissionLevel: 3,
      subject: 'admin',
      type: 'ROLE',
    },
  ],
  codEmp: 1,
  s1_etapa1: 'solicitacao',
  s2_etapa2: 'validacao',
};

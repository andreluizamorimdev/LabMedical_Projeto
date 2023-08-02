export interface IPaciente {
    id?: number;
    nomeCompleto: string;
    genero: string;
    dataNascimento: string;
    cpf: string;
    rg: string;
    estadoCivil: string;
    telefone: string;
    contatoEmergencia: string;
    email?: string;
    naturalidade: string;
    alergias?: string;
    cuidadosEspecificos?: string;
    convenio?: string;
    numeroConvenio?: string;
    validadeConvenio?: string;
    endereco: {
      cep: string;
      cidade: string;
      estado: string;
      logradouro: string;
      numero: string;
      complemento: string;
      bairro: string;
      pontoReferencia: string;
    };
}
  
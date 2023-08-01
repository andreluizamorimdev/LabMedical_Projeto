export interface IFormCadastroPaciente {
    nomeCompleto: string;
    genero: string;
    dataNascimento: Date;
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
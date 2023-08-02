import { IEndereco } from "../utils/interfaces/IEndereco";

const API_VIACEP_URL = `http://viacep.com.br/ws/CEP/json/`;

const normalizeString = (str: string) => {
    return str.replace("-", "").trim();
}

const Get = async (cep: string): Promise<IEndereco> => {

    const response = await fetch(API_VIACEP_URL.replace('CEP', normalizeString(cep) ));
    const data = await response.json() as IEndereco;

    return data;
}

export const ViaCepService = {
    Get,
}
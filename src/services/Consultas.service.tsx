import { IConsulta } from "../utils/interfaces/IConsulta";

const API_URL = `http://localhost:3000`;

const GetConsultas = async () => {
    const response = await fetch(`${API_URL}/consultas`);
    const consultas = await response.json() as Array<IConsulta>;

    return consultas;
}

const CreateConsulta = async (newConsulta: IConsulta) => {
    await fetch(`${API_URL}/consultas`, {
        method: 'POST',
        body: JSON.stringify(newConsulta),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(async (data) => {
        await data.json();
    })
    .catch((error) => {
        console.error(error);
    });
}

const GetConsultaById = async (id: number) => {
    const response = await fetch(`${API_URL}/consultas/${id}`);
    const consulta = await response.json() as IConsulta;

    return consulta;
}

const UpdateConsulta = async (id: number, updatedConsulta: IConsulta) => {
    await fetch(`${API_URL}/consultas/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedConsulta),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(async (data) => {
        await data.json();
    })
    .catch((error) => {
        console.error(error);
    });
}

const DeleteConsulta = async (id: number) => {
    await fetch(`${API_URL}/consultas/${id}`, {
        method: 'DELETE',
    })
    .then(async (data) => {
        await data.json();
    })
    .catch((error) => {
        console.error(error);
    });
}

export const ConsultaService = {
    GetConsultas,
    CreateConsulta,
    GetConsultaById,
    UpdateConsulta,
    DeleteConsulta,
}

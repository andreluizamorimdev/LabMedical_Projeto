import { IPaciente } from "../utils/interfaces/IPaciente";

const API_URL = `http://localhost:3000`;

const GetPacientes = async () => {
    const response = await fetch(`${API_URL}/pacientes`);
    const pacientes = await response.json() as Array<IPaciente>;
    
    return pacientes;
}

const CreatePaciente = async (newPaciente: IPaciente) => {
    await fetch(`${API_URL}/pacientes`, {
        method: 'POST',
        body: JSON.stringify(newPaciente),
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

const GetPacienteById = async (id: number) => {
    const response = await fetch(`${API_URL}/pacientes/${id}`);
    const paciente = await response.json() as IPaciente;
    
    return paciente;
}

const GetPacienteByCpf = async (cpf: string) => {
    let filter = `?`;
    if(cpf) {
        filter += `cpf=${cpf}&`;
    }
    const response = await fetch(`${API_URL}/pacientes${filter}`);
    const paciente = await response.json() as IPaciente;
    
    return paciente;
}

const UpdatePaciente = async (id:number, updatedPaciente: IPaciente) => {
    await fetch(`${API_URL}/pacientes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPaciente),
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

const DeletePaciente = async (id: number) => {
    await fetch(`${API_URL}/pacientes/${id}`, {
        method: 'DELETE',
    })
    .then(async (data) => {
        await data.json();
    })
    .catch((error) => {
        console.error(error);
    });
}

export const PacienteService = {
    GetPacientes,
    CreatePaciente,
    GetPacienteById,
    GetPacienteByCpf,
    UpdatePaciente,
    DeletePaciente,
}
import { IExame } from "../utils/interfaces/IExame";

const API_URL = `http://localhost:3000`;

const GetExames = async () => {
    const response = await fetch(`${API_URL}/exames`);
    const exames = await response.json() as Array<IExame>;

    return exames;
}

const CreateExame = async (newExame: IExame) => {
    await fetch(`${API_URL}/exames`, {
        method: 'POST',
        body: JSON.stringify(newExame),
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

const GetExameById = async (id: number) => {
    const response = await fetch(`${API_URL}/exames/${id}`);
    const exame = await response.json() as IExame;

    return exame;
}

const UpdateExame = async (id: number, updatedExame: IExame) => {
    await fetch(`${API_URL}/exames/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedExame),
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

const DeleteExame = async (id: number) => {
    await fetch(`${API_URL}/exames/${id}`, {
        method: 'DELETE',
    })
    .then(async (data) => {
        await data.json();
    })
    .catch((error) => {
        console.error(error);
    });
}

export const ExameService = {
    GetExames,
    CreateExame,
    GetExameById,
    UpdateExame,
    DeleteExame,
}

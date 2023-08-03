/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IUser } from "../utils/interfaces/IUser";

const API_URL = `http://localhost:3000`;

const Get = async () => {
    const response = await fetch(`${API_URL}/users`);
    const user: IUser = await response.json();
    return user;
}

const Create = async (newData: IUser) => {

    await fetch(`${API_URL}/users`, {
        method: 'POST',
        body: JSON.stringify({
            email: newData.email,
            password: newData.password,
        }),
        headers: {
            "content-type": "application/json",
        },
    })
    .then(async (data) => {
        await data.json();
    })
    .catch((err) => {
        console.log(err);
    });
}

const Show = async (id: number) => {

    const response = await fetch(`${API_URL}/users/${id}`);
    const user: IUser = await response.json();
    return user;
}

const ShowByEmail = async (email: string) => {
    let filter = `?`;
    
    if(email) {
        filter += `email=${email}&`;
    }
    const response = await fetch(`${API_URL}/users${filter}`);
    const users: Array<IUser> = await response.json();
    return users[0];
}

export const UserService = {
    Get,
    Create,
    Show,
    ShowByEmail,
}
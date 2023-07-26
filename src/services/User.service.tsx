/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IUser } from "../utils/interfaces/IUser";
import { LocalStorageService } from "./LocalStorage.service"

const Get = () => {
    return LocalStorageService.get("users");
}

const Create = (newData: IUser) => {
    const users:Array<IUser> = JSON.parse(Get()!) || [];
    const lastUser = users[users.length - 1];
    const id = (lastUser && lastUser.id ? lastUser.id : 0) + 1;
    const data: IUser= {
        id,
        ...newData,
    }
    const token = Math.random().toString(36);

    const userWithToken = {
        ...data,
        token,
    };

    const createStorage: Array<IUser> = [...users, userWithToken];

    LocalStorageService.set({key: 'users', data: createStorage});
}

const Show = (id: number) => {
    const users:Array<IUser> = JSON.parse(Get()!);
    const user = users.find(user => user.id === id);

    return user;
}

const ShowByEmail = (email: string) => {
    const users:Array<IUser> = JSON.parse(Get()!);
    const user = users.find(user => user.email === email);

    return user;
}

export const UserService = {
    Get,
    Create,
    Show,
    ShowByEmail,
}
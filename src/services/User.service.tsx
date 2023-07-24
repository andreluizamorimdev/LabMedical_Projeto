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
        ...newData,
        id,
    }

    const createStorage: Array<IUser> = [...users, data];

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
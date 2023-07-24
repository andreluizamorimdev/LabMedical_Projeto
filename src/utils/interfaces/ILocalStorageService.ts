import { IUser } from "./IUser";

export interface ILocalStorageService {
    key: string;
    data: Array<IUser>;
}
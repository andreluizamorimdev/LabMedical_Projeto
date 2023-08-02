import { IUserAuth } from "./IAuth";

export interface ILocalStorageService {
    key: string;
    data: IUserAuth;
}
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ILocalStorageService } from "../utils/interfaces/ILocalStorageService";

const get = (key: string) => {

    const json = localStorage.getItem(key);

    if(!json) return null;

    const data = JSON.parse(json);

    return data ?? null;
}

const set = ({key, data}: ILocalStorageService) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const LocalStorageService = {
    get,
    set
}
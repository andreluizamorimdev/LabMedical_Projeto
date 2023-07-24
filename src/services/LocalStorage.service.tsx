import { ILocalStorageService } from "../utils/interfaces/ILocalStorageService";

const get = (key: string) => {

    const token = localStorage.getItem(key);

    return token;
}

const set = ({key, data}: ILocalStorageService) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const LocalStorageService = {
    get,
    set
}
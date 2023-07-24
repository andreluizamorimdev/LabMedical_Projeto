import { UserService } from "../services/User.service";
import { IUser } from "./interfaces/IUser";

const defaultUser: IUser = {
    id: 1,
    email: "adm@labmedical.com",
    password: "12345678",
}

export const SetUsuarioPadrao = () => {
    const users = UserService.Get();
    if(!users) {
        UserService.Create(defaultUser);
    }
}
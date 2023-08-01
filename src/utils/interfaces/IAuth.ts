export interface IUserAuth {
    id?: number;
    email: string;
}
export interface IAuth { 
    user: IUserAuth,
    isLogged: boolean,
}
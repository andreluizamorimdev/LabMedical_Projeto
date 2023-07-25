import { Dispatch, SetStateAction } from 'react';
import { IAuth } from "./IAuth";

export interface IAuthContext {
    authentication: IAuth,
    setAuthentication: Dispatch<SetStateAction<IAuth>>
}
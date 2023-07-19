import { UseFormRegisterReturn, FieldError } from "react-hook-form";
export interface IPropsInput {
    label?: string;
    type?: string;
    id?: string;
    placeholder?: string;
    register?: UseFormRegisterReturn;
    error?: FieldError;
}
import { FocusEvent } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
export interface IPropsInput {
    label?: string;
    type?: string;
    id?: string;
    placeholder?: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    isLoading?: boolean;
    register?: UseFormRegisterReturn;
    error?: FieldError;
}
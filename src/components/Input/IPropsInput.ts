import { FocusEvent, ChangeEvent } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

export interface IPropsInput extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
    label?: string;
    type?: string;
    id?: string;
    placeholder?: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    isLoading?: boolean;
    register?: UseFormRegisterReturn;
    error?: FieldError;
    value?: string | undefined;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
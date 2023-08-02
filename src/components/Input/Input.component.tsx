import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import { IPropsInput } from './IPropsInput';
import * as Styled from './Input.style';

import ReactLoading from 'react-loading';

const InputComponent = ({label, type, id, placeholder, onBlur , isLoading, register, error, value, onChange, rows, defaultValue }: IPropsInput) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    return ( 
        <Styled.InputBox>
            <Styled.Label $hasError={!!error} htmlFor={id}>{label}</Styled.Label>
            { type !== 'textarea' &&
                <Styled.InputContainer>
                    <Styled.Input $hasError={!!error} type={ showPassword ? 'text' : type} id={id} placeholder={placeholder} onBlur={onBlur} {...register} value={value || defaultValue} onChange={handleChange} />
                    <Styled.Loading>
                        { isLoading && <ReactLoading type='spin' color='#6c63ff' width={'2rem'} />}
                    </Styled.Loading>
                    { type === 'password' &&
                    <Styled.Icon $hasError={!!error} type='button' onClick={handleShowPassword} >
                        { !showPassword
                            ? <MdVisibility />
                            : <MdVisibilityOff />

                        }
                    </Styled.Icon>
                    }
                    { error && <Styled.Error>{error.message}</Styled.Error>}
                </Styled.InputContainer>
            }
            

            {
                type === 'textarea' &&  
                <Styled.TextAreaContainer>
                    <Styled.TextArea $hasError={!!error} id={id} placeholder={placeholder} rows={rows} value={value || defaultValue} onChange={handleChange} {...register} />
                    { error && <Styled.Error>{error.message}</Styled.Error>}
                </Styled.TextAreaContainer>
            }
        </Styled.InputBox>
    );
}
 
export default InputComponent;
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import { IPropsInput } from './IPropsInput';
import * as Styled from './Input.style';

import ReactLoading from 'react-loading';

const InputComponent = ({label, type, id, placeholder, onBlur , isLoading, register, error}: IPropsInput) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return ( 
        <Styled.InputBox>
            <Styled.Label $hasError={!!error} htmlFor={id}>{label}</Styled.Label>
            { type !== 'textarea' &&
                <Styled.InputContainer>
                    <Styled.Input $hasError={!!error} type={ showPassword ? 'text' : type} id={id} placeholder={placeholder} onBlur={onBlur} {...register} />
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
                <Styled.TextArea $hasError={!!error} id={id} placeholder={placeholder} {...register} />
            }
            { error && <Styled.Error>{error.message}</Styled.Error>}
        </Styled.InputBox>
    );
}
 
export default InputComponent;
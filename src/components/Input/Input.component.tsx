import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import { IPropsInput } from './IPropsInput';
import * as Styled from './Input.style';

const InputComponent = ({label, type, id, placeholder, register, error}: IPropsInput) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return ( 
        <Styled.InputBox>
            <Styled.Label $hasError={!!error} htmlFor={id}>{label}</Styled.Label>
            { type !== 'textarea' &&
                <Styled.InputContainer>
                    <Styled.Input $hasError={!!error} type={ showPassword ? 'text' : type} id={id} placeholder={placeholder} {...register} />
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
                <Styled.TextArea $hasError={!!error} id={id} placeholder={placeholder} />
            }
        </Styled.InputBox>
    );
}
 
export default InputComponent;
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import { IPropsInput } from '../../interfaces/IPropsInput';
import * as Styled from './Input.style';

const InputComponent = ({label, type, id, placeholder}: IPropsInput) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return ( 
        <Styled.InputBox>
            <Styled.Label htmlFor={id}>{label}</Styled.Label>
            { type !== 'textarea' &&
                <Styled.InputContainer>
                    <Styled.Input type={ showPassword ? 'text' : type} id={id} placeholder={placeholder} />
                    { type === 'password' &&
                    <Styled.Icon type='button' onClick={handleShowPassword} >
                        { !showPassword
                            ? <MdVisibility />
                            : <MdVisibilityOff />

                        }
                    </Styled.Icon>
                    }
                </Styled.InputContainer>
            }

            {
                type === 'textarea' &&
                <Styled.TextArea id={id} placeholder={placeholder} />
            }
        </Styled.InputBox>
    );
}
 
export default InputComponent;
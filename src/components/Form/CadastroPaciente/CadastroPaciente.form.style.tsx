import styled from 'styled-components';
import * as Styled from '../Login/Login.style';

export const FormCadastroPaciente = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    
`;

export const FormHeader = styled(Styled.FormHeader) `
    padding: .5rem;
    margin-bottom: 1rem;
`;

export const InputBox = styled(Styled.InputBox) `
    flex-direction: row;
    padding: .5rem;
    gap: 1rem;
    margin-bottom: 0;
`;

export const SelectBox = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label<{$hasError?: boolean}>`
    font-size: .8rem;
    font-weight: 600;
    color: ${({$hasError}) => $hasError ? '#FF5432' : '#000000c0'};
`
export const Select = styled.select<{$hasError?: boolean}>`
    width: 100%;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: .8rem;
    border: 1px solid ${({$hasError}) => {return $hasError ? '#FF5432' : '#6c63ff'}};
    
    &:hover {
        background-color: #f2f2f2;
    }
`

export const Option = styled.option`
    font-size: .8rem;
    font-weight: 600;
    color: #000000c0;
`;

export const Error = styled.p`
    font-size: .8rem;
    color: #FF5432;
`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;  
`;

export const Button = styled(Styled.Button)<{$outlined?: boolean}> `
    outline: ${({$outlined}) => ($outlined ? '1px solid #FF5432' : 'none')};
    background-color: ${({$outlined}) => ($outlined ? 'transparent' : '#6c63ff')};
    color: ${({$outlined}) => ($outlined ? '#FF5432' : '#fff')};
`;
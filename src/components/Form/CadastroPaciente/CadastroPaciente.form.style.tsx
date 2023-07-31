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
`;

export const InputBox = styled(Styled.InputBox) `
    flex-direction: row;
    padding: .5rem;
    gap: 1rem;
    margin-bottom: 0;
`;

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
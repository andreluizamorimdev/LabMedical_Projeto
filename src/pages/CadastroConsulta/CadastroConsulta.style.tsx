import styled from 'styled-components';
import * as Styled from '../CadastroPaciente/CadastroPaciente.style'

export const Container = styled(Styled.Container)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: .2rem;
`;

export const Card = styled(Styled.Card)``;

export const InputComponentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem; 
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0;
    gap: 1rem; 
`;

export const SearchButton = styled.button<{$active?: boolean}>`
    
    width: 10rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #6c63ff;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.2s ease-in-out;
    opacity: ${({ $active }) => {return $active ? 1 : .5 }};

    margin-top: .6rem;

    &:disabled {
        cursor: not-allowed;
    }

    cursor: pointer;
    
`;

export const InfoBusca = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`;
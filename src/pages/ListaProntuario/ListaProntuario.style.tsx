import styled from 'styled-components';

import {HomeContainer, HomeContent, HomeContentBody} from '../Home/Home.style';

export const ListaProntuarioContainer = styled(HomeContainer)``;

export const ListaProntuarioContent = styled(HomeContent)``;

export const ListaProntuarioContentBody = styled(HomeContentBody)``;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 10px #6b63ff6c;
    cursor: pointer;
`;

export const TitulosListaCardBox = styled.div`
    display: flex;
    margin-top: 2rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    width: 100%;

    h3 {
        font-size: 2rem;
    }
`;

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 2rem;

`;

export const CardContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    width: 100%;
`;

export const CardTitulo = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const CardButton = styled.a`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    right: 0;
    border-radius: 50%;
    background-color: transparent;
    color: #6b63ff;
    font-size: 3rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
`;
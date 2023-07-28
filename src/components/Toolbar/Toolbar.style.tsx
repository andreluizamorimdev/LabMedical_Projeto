import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 5rem;

    background-color: #6c63ff;
    color: #fff;
`

export const TituloPagina = styled.h1`
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: .5rem;
`

export const NomePerfil = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
`

export const Perfil = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    svg {
        font-size: 3rem;
    }

`
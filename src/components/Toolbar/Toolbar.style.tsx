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

export const Perfil = styled.button`
    display: flex;
    align-items: center;
    gap: .8rem;
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    position: relative;
    svg {
        font-size: 3rem;
    }

`

export const PerfilDropdown = styled.div<{$hasOpen?: boolean}>`
    position: absolute;
    top: 3rem;
    right: 0;
    width: 12.5rem;
    height: 4rem;
    background-color: #fff;
    color: #6c63ff;
    border-radius: .5rem;
    box-shadow: 0 0 1rem #6b63ff6c;
    padding: 1rem;
    display: ${({$hasOpen}) => $hasOpen ? 'flex' : 'none'};
    flex-direction: column;
    z-index: 1;
`;

export const PerfilDropdownItem = styled.a`
    background-color: transparent;
    border: none;
    color: #6c63ff;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    padding: .3rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    svg {
        font-size: 1.5rem;
    }
`
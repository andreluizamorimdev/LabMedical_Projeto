import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBar = styled.nav<{$open?: boolean}>`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: ${({$open}) => $open ? '18rem' : '6rem'};
    height: 100%;
    background-color: #6c63ff;
    color: #fff;
    transition: width 0.3s ease-in-out;

    text-transform: uppercase;
`;

export const SideBarButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.2rem;
    
    background-color: transparent;
    border: none;
    color: #fff;

    cursor: pointer;

    span {
        display: flex; 
        align-items: center;
        justify-content: space-between;
        width: 100%;

        font-size: 1.5rem;
    }    
    
    svg {
        font-size: 2.5rem;
    }

`;

export const MenuItem = styled(Link)<{$active?: boolean, $open: boolean}>`
    display: flex;
    align-items: center;
    justify-content: ${({$open}) => $open ? 'flex-start' : 'center'};

    cursor: pointer;
    color: #fff;
    border-bottom: ${({$active}) => $active ? '2px solid #fff' : 'none'};
    text-decoration: none;
    width: 100%;
    padding: 1.2rem;

    h5 {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    svg {
        font-size: ${({$open}) => $open ? '1.8rem' : '2.5rem'};
    }
    
`

export const LogoLab = styled.img<{$open?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: ${({$open}) => $open ? '100%' : '0'};
`;
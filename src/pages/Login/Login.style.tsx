import styled from 'styled-components';

export const LoginCard = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    box-shadow: 10px 10px 10px 0px #6b63ff6c;
    
    @media (max-width: 1410px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f2f2f2;
        width: 75%;
    }
    @media (max-width: 920px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        box-shadow: none;
        width: 100%;
    }
`
export const ImageBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #f2f2f2;

    img {
        width: 35rem;
    }

    @media (max-width: 1410px) {
        display: none;
    }
`
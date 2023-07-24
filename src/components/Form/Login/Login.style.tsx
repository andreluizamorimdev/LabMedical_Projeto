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

export const Form = styled.form`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 3rem;
    gap: 1rem;
    background: #FFF;  
    
    @media (max-width: 920px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 10px 10px 10px 0px #6b63ff6c;
    }
`

export const FormHeader = styled.legend`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    h1::after {
        content: '';
        display: block;
        width: 5rem;
        height: .3rem;
        background-color: #6b63ff6c;
        margin: 0 auto;
        position: absolute;
        border-radius: 10px;
    }
`

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.2rem;
`

export const Button = styled.button<{$active?: boolean}>`
    width: 100%;
    border: none;
    font-weight: 500;
    background-color: #6c63ff;
    padding: 0.62rem;
    border-radius: 5px;
    opacity: ${({ $active }) => {return $active ? 1 : .5 }};

    cursor: pointer;
    
    font-size: .93rem;
    font-weight: 500;
    color: #fff;
    
    &:disabled {
        cursor: not-allowed;
    }
`

export const EsquiciSenha = styled.a`
    text-decoration: none;
    cursor: pointer;
`
import styled from 'styled-components';

export const LoginCard = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    box-shadow: 10px 10px 10px 0px rgba(82, 129, 220, 0.25);
    
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
        box-shadow: 10px 10px 10px 0px rgba(82, 129, 220, 0.25);
        width: 100%;
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
        background-color: #6c63ff;
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

export const Label = styled.label`
    font-size: .8rem;
    font-weight: 600;
    color: #000000c0;
`

export const Input = styled.input`
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: .8rem;

    &::placeholder{
        color: #000000be;
    }

    &:hover {
        background-color: #eeeeee75;
    }

    &:focus-visible {
        outline: 1px solid #6c63ff;
    }
`

export const Button = styled.button`
    width: 100%;
    border: none;
    font-weight: 500;
    background-color: #6c63ff;
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
    
    font-size: .93rem;
    font-weight: 500;
    color: #fff;

    &:hover {
        background-color: #6b63fff1;
    }
`
import styled from 'styled-components';

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.5rem;
`

export const Label = styled.label`
    font-size: .8rem;
    font-weight: 600;
    color: #000000c0;
`

export const Input = styled.input`
    width: 100%;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: .8rem;

    &::placeholder{
        color: #00000097;
    }

    &:hover {
        background-color: #f2f2f2;
    }

    &:focus-visible {
        outline: 1px solid #6c63ff;
    }
`

export const TextArea = styled.textarea`
    display: flex;
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem 2.6rem;
    align-items: flex-start;
    align-self: stretch;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;

    &::placeholder{
        color: #00000097;
    }

    &:hover {
        background-color: #f2f2f2;
    }

    &:focus-visible {
        outline: 1px solid #6c63ff;
    }
`

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`

export const Icon = styled.button`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    border: 0;
    
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.3rem;
    color: #6c63ff;
`
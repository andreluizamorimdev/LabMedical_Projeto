import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 1.25rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-width: 20rem;
    height: 10rem;
`;

export const Button = styled.button`
    background-color: #6c63ff;
    border: none;
    border-radius: 5px;
    padding: 0.62rem;
    color: #fff;
    font-weight: 500;
    font-size: .93rem;
    cursor: pointer;
    transition: .3s;
`
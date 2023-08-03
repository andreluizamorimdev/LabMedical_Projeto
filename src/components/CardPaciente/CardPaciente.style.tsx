import styled from 'styled-components';

export const CardPaciente = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #6b63ff6c;
    padding: 3rem;
    margin: 10px;
    width: 30%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
`;

export const CardPacienteHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardPacienteAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #6b63ff;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #fff;
    width: 100px;
    height: 100px;
    box-shadow: 0 0 10px #6b63ff6c;

    svg {
        font-size: 6rem;
    }
`
export const CardPacienteContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const CardPacienteFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

export const CardPacienteButton = styled.button`
    background-color: #6b63ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: .5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: .3s;
`
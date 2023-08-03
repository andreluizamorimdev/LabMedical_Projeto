import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: .2rem;
`;

export const HomeContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: .3rem;
    width: 100%;
    height: 100%;
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: .3rem;
`;


export const HomeContentBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: .1rem;
    width: 100%;
    height: 100%;

    
`;

export const CardEstatisticaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: .6rem;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
`;

export const CardEstatistica = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #6b63ff6c;
    padding: 3rem;
    margin: 10px;
    width: 30%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const CardEstatisticaAvatar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    font-size: 5rem;
    font-weight: bold;
    color: #6b63ff;
`;

export const TituloCardEstatistica = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 600;
    color: #6b63ff;
`;
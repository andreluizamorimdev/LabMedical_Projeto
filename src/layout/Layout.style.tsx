import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const LayoutMain = styled.main`
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;
`;

export const LayoutContent = styled.section`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: #fff;
    
`;
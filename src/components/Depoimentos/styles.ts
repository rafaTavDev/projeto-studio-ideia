import styled from "styled-components";

export const ContainerDepoimentos = styled.main`
    padding: var(--paddingContainerPadrao);
`

export const DepoimentosArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: var(--larguraBloco);
    margin: 0 auto;
`

export const DepoimentosDesc = styled.div`
    max-width: 35rem;
    width: 100%;
    font-size: var(--fontePequena);
`

export const ContainerCaixas = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 3rem 0;
    @media(max-width: 800px){
        flex-direction: column;   
        gap: 2.5rem;
        align-items: center;
    }
`
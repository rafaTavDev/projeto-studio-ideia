import styled from "styled-components";

export const ContainerCaixa = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 38rem;
    width: 100%;
    border: .4rem solid #000;
    padding: 5rem 2rem;

    @media(max-width: 978px){
        padding: 3.5rem 2rem;
    }

    @media(max-width: 800px){
        border: .4rem solid #fff;
        max-width: 100%;
    }
`

export const Mais = styled.div`
    font-size: var(--fonteMais);
    line-height: 7rem;
`

export const TituloCaixa = styled.div`
    font-size: var(--fontePequena);
    font-weight: 600;
`

export const DescCaixa = styled.div`
    font-size: var(--fontePequena);
`
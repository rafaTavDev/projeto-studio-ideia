import styled from "styled-components"

export const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: var(--corFooter);
    padding-top: 5rem;
    @media(max-width: 800px){
        padding-top: 2rem;
    }
`

export const FooterArea = styled.div`
    display: flex;
    width: var(--larguraBloco);
    margin: 0 auto;
    gap: 2rem;
    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const FooterEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    @media(max-width: 800px){
        width: 100%;
    }
`

export const FooterDireita = styled.div`
    display: flex;
    justify-content: flex-end; 
    width: 50%;
    @media(max-width: 800px){
        width: 100%;
    }
`

export const Mapa = styled.iframe`
    height: 45rem;
    width: 90%;
    border: 0;
    @media(max-width: 800px){
        height: 30rem;
        width: 100%;
    }
`

export const CtaFooter = styled.div`
    font-size: var(--fonteSemiGrande);
    color: #fff;
    margin-top: 1rem;
    @media(max-width: 800px){
        text-align: center;
        margin-top: 3rem;
    }
`

export const ContainerIcones = styled.div`
    display: flex;
    gap: 4rem;
    @media(max-width: 800px){
        justify-content: center;
    }
`

export const Icone = styled.img`
    width: 4rem;
    cursor: pointer;
`

export const TextosEndereco = styled.div`
    display: flex;
    flex-direction: column;
`

export const TextoEndereco = styled.div`
    font-size: var(--fontePequena);
    color: #fff;
    margin-top: -1rem;
    @media(max-width: 800px){
        text-align: center;
    }
`

export const ContainerCopy = styled.div`
    display: flex;
    align-items: center;
    background-color: #000;
    height: 6rem;
    align-self: stretch;
    padding-left: 7.5%;
`

export const TextoCopy = styled.div`
    color: #fff;
    font-size: var(--fontePequena);
` 

export const Link = styled.a`
    text-decoration: none;
`
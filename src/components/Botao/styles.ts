import styled from "styled-components";

export const ContainerBotao = styled.div`
    display: flex;
    gap: 2rem;
    padding: 1.3rem 3rem;
    border-radius: 10rem;
    border: .2rem solid #000;
    cursor: pointer;

    @media(max-width: 1100px){
        padding: 1.3rem 2rem;
    }

    @media(max-width: 978px){
        padding: 1.3rem 1.5rem;
    }

    @media(max-width: 800px){
        display: none;
    }
`

export const Link = styled.a`
    text-decoration: none;
`

export const ImagemBotao = styled.img`
    width: 3rem;
    height: auto;

    @media(max-width: 1100px){
        width: 2rem
    }
`

export const ContainerTexto = styled.div`
    display: flex;
    align-items: center;
    font-size: var(--fontePequena);
`
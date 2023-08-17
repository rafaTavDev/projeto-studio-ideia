import styled from "styled-components";

export const ContainerBotao = styled.div`
    display: flex;
    gap: 2rem;
    padding: 1.3rem 3rem;
    border-radius: 10rem;
    border: .2rem solid #fff;
    cursor: pointer;
    @media(min-width: 800px){
        display: none;
    }
    min-width: 27rem; 
    `

export const Link = styled.a`
    text-decoration: none;
`

export const ImagemBotao = styled.img`
    width: 2.5rem;
    height: auto;
`

export const ContainerTexto = styled.div`
    display: flex;
    align-items: center;
    font-size: var(--fontePequena);
`
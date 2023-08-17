import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    min-height: 90vh;
    padding: 3rem;
    @media(max-width: 800px){
        flex-direction: column;   
        height: auto;
        min-height: 0;
        padding: 0;
    }
`

export const BannerEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2rem;
    @media(max-width: 800px){
        order: 2;
        background-color: #000;
        color: #fff;
    }
`

export const LogoPc = styled.img`
    width: 10rem;
    height: auto;
    @media(max-width: 800px){
        display: none;
    }
`

export const LogoMobile = styled.img`
    width: 6rem;
    height: auto;
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 3;
    @media(min-width: 800px){
        display: none;
    }
`

export const BaixoLogo = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 1.5rem;
`

export const ContainerTextos = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 2rem;
`

export const TituloBanner = styled.div`
    font-size: var(--fonteTitulo);
    font-weight: 600;
    line-height: var(--lineHeightTitulo);
    @media(max-width: 800px){
        line-height: 4rem;
        font-weight: normal;
    }
`

export const DescBanner = styled.div`
    font-size: var(--fontePequena);
    padding-right: 15rem;
    @media(max-width: 800px){
        padding-right: 0;   
        padding-right: 1rem;
    }
`

export const ContainerBotoes = styled.div`
    display: flex;
    gap: 3rem;

    @media(max-width: 1100px){
        gap: 1rem;
    }
    
    @media(max-width: 800px){
        flex-direction: column;  
        gap: 1.5rem; 
    }
`

export const maiusculaSub = styled.span`
    text-transform: uppercase;
    text-decoration: underline;
`

/* Esse cara é ter a altura da imagem que vai ser 100% */
export const BannerDireita = styled.div`
    position: relative;
`

export const mascara = styled.div`
    display: none;
    @media(max-width: 800px){
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(#000 5%, 30% ,transparent, 70% ,#000 95%);
    }
`

export const ImagemBanner = styled.img`
    height: 100%;
    max-height: 99rem;
    width: 50rem;
    object-fit: cover;

    @media(max-width: 998px){
        width: 35rem;
    }

    @media(max-width: 800px){
        height: auto;
        width: 100%;  
    }

`

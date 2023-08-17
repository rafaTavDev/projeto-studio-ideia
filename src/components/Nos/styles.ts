import styled from "styled-components";

export const ContainerNos = styled.div`
    padding: var(--paddingContainerPadrao);
`

export const NosArea = styled.div`
    display: flex;
    width: var(--larguraBloco);
    margin: 0 auto;
    @media(max-width: 800px){
        flex-direction: column;
        width: 100%;
    }
`

export const NosEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    flex: 1;
    width: var(--larguraBloco);
    margin: 0 auto;
    @media(max-width: 800px){
        order: 2;
    }
`

export const TituloNos = styled.div`
    font-size: var(--fonteTitulo);
    font-weight: 600;
    line-height: var(--lineHeightTitulo);

    @media(max-width: 1270px){
        font-size: 4rem;
    }

    @media(max-width: 800px){
        font-size: var(--fonteTitulo);
        line-height: 4rem;   
    }

`

export const ContainerDescNos = styled.div  `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: var(--fontePequena);
`

export const Desc = styled.div`
    padding-right: 15rem;

    @media(max-width: 1100px){
        padding-right: 0rem;
    }

    @media(max-width: 1390px){
        padding-right: 2rem;
    }

    @media(max-width: 800px){
        padding-right: 0;
    }
`

export const negrito = styled.span`
    font-weight: 700;
`

export const NosDireita = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    position: relative;
`

export const Mascara = styled.div`  
    display: none;
    @media(max-width: 800px){
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(#000 5%, 15% ,transparent, 70% ,#000 95%);
    }
`

export const ImgNos = styled.img`
    align-self: flex-start;
    width: 85%;
    height: auto;
    @media(max-width: 800px){
        height: auto;
        width: 100%;
    }
`
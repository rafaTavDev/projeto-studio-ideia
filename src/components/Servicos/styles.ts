import styled from "styled-components";

type slideProps = {
    grande: boolean
}

export const ContainerServicos = styled.div`
    padding: var(--paddingContainerPadrao);
    padding-top: 8rem;
    @media(max-width: 800px){
        padding-top: 3rem;
    }
`

export const ServicosTitulo = styled.div`
    width: var(--larguraBloco);
    margin: 0 auto;
`

export const ContainerSetas = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: calc((100vw - var(--larguraSlideServicos)) / 2);
    gap: 2rem;
    margin-bottom: 2rem;

    @media(max-width: 800px){
        display: none;
    }
`

export const Seta = styled.img`
    width: 7rem;
    cursor: pointer;
    &:first-child{
        rotate: 180deg;
    }
`

export const ContainerSlider = styled.div`
    margin: 0 calc((100vw - var(--larguraSlideServicos)) / 2);
`

export const Slider = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    color: #fff;
    transition: all .5s linear;

    @media(max-width: 800px){
        flex-direction: column;
        margin-top: 3rem;
    }

`

export const Slide = styled.div<slideProps>`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: var(--larguraSlideServicos);
    background-color: #000;
    padding: 6rem 4rem;
    ${props => props.grande? "min-height: 50rem" : "min-height: 45rem"};
    transition: all .5s linear;

    @media(max-width: 800px){
        background-color: #232323;
        padding: 4rem 2rem;
        justify-content: center;
        min-height: 0;
        min-width: 85vw;
    }
`

export const NumeroSlide = styled.div`
    font-size: var(--fonteSemiGrande);
`

export const TituloSlide = styled.div`
    font-size: var(--fonteMedia);
    font-weight: bold;
`

export const DescSlide = styled.div`
    font-size: var(--fonteMedia);
    @media(max-width: 800px){
        font-size: 1.65rem;
    }
`


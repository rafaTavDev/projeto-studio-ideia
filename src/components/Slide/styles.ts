import styled from "styled-components";


export const ContainerSlides = styled.div`
    background-color: var(--cor2);
    flex: 1;
    overflow: hidden;
    @media(max-width: 800px){
        background-color: #000;
        margin: 2rem 0;
    }
    padding-left: 2rem;
`

export const Slider = styled.div`
    display: flex;
    gap: 1rem;
    height: 100%;
    width: calc(2000vw/3.7);
    transition: all 50s linear;
    @media(max-width: 800px{
        width: calc(20 * 40vw);
    }
    )
`

export const imagem = styled.img`
    height: 100%;
    object-fit: cover;
    width: 23vw;
    @media(max-width: 800px){
        width: 40vw;
    }
`
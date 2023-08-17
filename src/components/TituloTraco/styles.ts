import styled from "styled-components";

type ContainerProps = {
    centro: boolean
}

export const ContainerTituloTraco = styled.div<ContainerProps>`
    display: flex;
    align-items: flex-end;
    ${props => props.centro? "width: var(--larguraBloco)" : ""};
    ${props => props.centro? "margin: 0 auto" : ""}
`

export const Texto = styled.div`
    font-size: var(--fonteSemiGrande);
    font-weight: 600;
`

export const Traco = styled.div`
    width: 12rem;
    height: .4rem;
    background-color: #000;
    @media(max-width: 800px){
        background-color: #fff;
        width: 6rem;
    }
`
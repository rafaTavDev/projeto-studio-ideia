import * as C from "./styles"

type Props = {
    texto: string,
    img: string,
    cor: string,
    alignSf?: string,
    href: string
}

export function Botao({texto, img, cor, alignSf, href}: Props) {
  return (
    
    <C.Link href={href} style={{alignSelf: alignSf ? alignSf : "auto"}} target="_blank">
      <C.ContainerBotao style={{backgroundColor: cor, color: cor == "#000"? "#fff" : "#000"}}>
        <C.ImagemBotao src={img}/>
        <C.ContainerTexto>
            {texto}
        </C.ContainerTexto>
      </C.ContainerBotao>
    </C.Link>
  )
}

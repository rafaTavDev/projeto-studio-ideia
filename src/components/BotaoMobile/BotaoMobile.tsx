import * as C from "./styles"

type Props = {
    texto: string,
    img: string,
    cor: string,
    alignSf?: string,
    jfCont?: string,
    href: string
}

export function BotaoMobile({texto, img, cor, alignSf, jfCont, href}: Props) {
  return (
    
    <C.Link style={{ alignSelf: alignSf ? alignSf : "auto"}} target="_blank" href={href}>
      <C.ContainerBotao style={{backgroundColor: cor, color: cor == "#000"? "#fff" : "#000", justifyContent: jfCont ? jfCont : "auto"}}>
        <C.ImagemBotao src={img}/>
        <C.ContainerTexto>
            {texto}
        </C.ContainerTexto>
      </C.ContainerBotao>
    </C.Link>
  )
}

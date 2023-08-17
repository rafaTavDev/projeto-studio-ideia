import * as C from "./styles"

type Props = {
    texto: string,
    centralizar: boolean
}

export function TituloTraco({texto, centralizar}: Props) {
  return (
    <C.ContainerTituloTraco centro={centralizar}>
        <C.Texto>
            {texto}
        </C.Texto>
        <C.Traco></C.Traco>
    </C.ContainerTituloTraco>
  )
}


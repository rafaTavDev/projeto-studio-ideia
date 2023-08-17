import * as C from "./styles"

type Props = {
  titulo: string,
  desc: string
}

export function Caixa({titulo, desc}: Props) {
  return (
    <C.ContainerCaixa>
        <C.Mais>+</C.Mais>
        <C.TituloCaixa>
          {titulo}
        </C.TituloCaixa>
        <C.DescCaixa>
          {desc}
        </C.DescCaixa>
    </C.ContainerCaixa>
  )
}

import * as C from "./styles"
import imgNos from "../../assets/images/imgNos.jpg"

export function Nos() {
  return (
    <C.ContainerNos>
        <C.NosArea>
            <C.NosEsquerda>
                <C.TituloNos>
                    Clarice e Gustavo Matos
                </C.TituloNos>
                <C.ContainerDescNos>
                    <C.Desc>
                        Graduados em Arquitetura e Urbanismo pela Universidade Federal Fluminense em 2006, percorremos caminhos distintos atuando em órgãos municipais e escritórios de arquitetura, até que em março de 2009 decidimos seguir o sonho de ter o nosso próprio escritório.
                    </C.Desc>
                    <C.Desc>
                        Assim iniciamos o <C.negrito>Studio Ideia Arquitetura</C.negrito>, com o objetivo de transformar a vida das pessoas trazendo mais qualidade e personalidade aos ambientes.
                    </C.Desc>
                    <C.Desc>
                        Seja no ambiente residencial ou corporativo, acreditamos que o espaço pode influenciar diretamente no bem estar das pessoas.
                    </C.Desc>
                </C.ContainerDescNos>
            </C.NosEsquerda>
            <C.NosDireita>
                <C.Mascara></C.Mascara>
                <C.ImgNos src={imgNos} loading="lazy"/>
            </C.NosDireita>
        </C.NosArea>
    </C.ContainerNos>
  )
}

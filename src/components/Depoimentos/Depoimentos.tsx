import * as C from "./styles"
import { TituloTraco } from "../TituloTraco"
import { Caixa } from "../Caixa"
import { Botao } from "../Botao"
import { BotaoMobile } from "../BotaoMobile"
import imgWpp from "../../assets/images/wpp-icone.svg"
import wppPreto from "../../assets/images/wpp-icone-preto.svg"


export function Depoimentos() {
  return (
    <C.ContainerDepoimentos>
        <C.DepoimentosArea>
            <TituloTraco texto="Depoimentos" centralizar={false}/>
            <C.DepoimentosDesc>
             
            </C.DepoimentosDesc>
            <C.ContainerCaixas>
                <Caixa titulo="Constança Hertz" desc="A equipe do Studio Ideia já fez três projetos de arquitetura para mim e os resultados foram sempre ótimos."/>
                <Caixa titulo="Rafael Moreira" desc="Buscaram as melhores soluções para aproveitar o espaço dos ambientes e tiveram o cuidado de escolher cada detalhe dentro do nosso gosto pessoal. Recomendo o trabalho deles!"/>
                <Caixa titulo="Jussara Guimarães" desc="Estou apaixonada pelo trabalho dos profissionais do Studio Ideia. Estamos realizando a reforma da minha sala, que está um sonho. Além do lindo projeto, a atenção diferenciada, o cuidado com os detalhes e a dedicação dos arquitetos é ímpar."/>
            </C.ContainerCaixas>
            <Botao texto="Fale conosco" img={imgWpp} cor="#000" alignSf="center" href="https://wa.me/5521981071401?text=Olá!%20Visitei%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço!"/>
            <BotaoMobile texto="Fale conosco" img={wppPreto} cor="#fff" alignSf="center" jfCont="center" href="https://wa.me/5521981071401?text=Olá!%20Visitei%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço!"/>
        </C.DepoimentosArea>
    </C.ContainerDepoimentos>
  )
}

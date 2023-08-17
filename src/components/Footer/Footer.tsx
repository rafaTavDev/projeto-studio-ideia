import * as C from "./styles"
import imgWpp from "../../assets/images/wpp-icone.svg"
import imgInsta from "../../assets/images/imgInstaBranca.svg"

export function Footer() {
  return (
    <C.ContainerFooter>
        <C.FooterArea>
          <C.FooterEsquerda>
            <C.CtaFooter>
                Confira nossas redes sociais
            </C.CtaFooter>
            <C.ContainerIcones>
              <C.Link href="https://www.instagram.com/arq.studioideia/" target="_blank">
                <C.Icone src={imgInsta} loading="lazy"/>
              </C.Link>
              <C.Link href="https://wa.me/5521981071401?text=Olá!%20Visitei%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço!" target="_blank">
                <C.Icone src={imgWpp} loading="lazy"/>
              </C.Link>
            </C.ContainerIcones>
            <C.CtaFooter>
              Onde estamos
            </C.CtaFooter>
            <C.TextosEndereco>
              <C.TextoEndereco>
              Condomínio do Edifício Carmina Lopes - R. Prof. Otacílio, 61/302 - Santa Rosa, Niterói - RJ, 24240-670
              </C.TextoEndereco>
            </C.TextosEndereco>
          </C.FooterEsquerda>
          <C.FooterDireita>
            <C.Mapa src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3981638943746!2d-43.10204182476339!3d-22.898680387581308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983f5cc804537%3A0xae822b662dc4251a!2sStudio%20Ideia%20Arquitetura!5e0!3m2!1spt-BR!2sbr!4v1690856739482!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></C.Mapa>
          </C.FooterDireita>
        </C.FooterArea>
        <C.ContainerCopy>
            <C.TextoCopy>Copyright ©2023 Lab X</C.TextoCopy>
        </C.ContainerCopy>
    </C.ContainerFooter>
  )
}

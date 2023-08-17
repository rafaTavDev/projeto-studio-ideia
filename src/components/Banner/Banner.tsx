
import * as C from "./styles"
import imgBanner from "../../assets/images/fundoBanner.jpg"
import Logo from "../../assets/images/Logo.png"
import LogoBranca from "../../assets/images/LogoBranca.png"
import imgWpp from "../../assets/images/wpp-icone.svg"
import imgInsta from "../../assets/images/insta-icone.svg"
import wppPreto from "../../assets/images/wpp-icone-preto.svg"
import instaBranco from "../../assets/images/imgInstaBranca.svg"
import { Botao } from "../Botao/Botao"
import { BotaoMobile } from "../BotaoMobile"

export function Banner() {
  return (
    <C.BannerContainer>
        <C.BannerEsquerda>
            <C.LogoPc src={Logo}/>
            <C.BaixoLogo>
                <C.ContainerTextos>
                    <C.TituloBanner>
                    Projetamos lares para pessoas de verdade.
                    </C.TituloBanner>
                    <C.DescBanner>
                        Pessoas que priorizam o conforto e o bem-estar, que procuram praticidade no dia a dia e que não querem modismos passageiros. Buscamos sempre soluções <C.maiusculaSub>atemporais</C.maiusculaSub>
                    </C.DescBanner>
                    <C.ContainerBotoes>
                        <Botao texto="Fale conosco" img={imgWpp} cor="#000" href="https://wa.me/5521981071401?text=Olá!%20Visitei%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço!"/>
                        <Botao texto="Nosso instagram" img={imgInsta} cor="#fff" href="https://www.instagram.com/arq.studioideia/" />
                        <BotaoMobile texto="Fale conosco" img={wppPreto} cor="#fff" alignSf="flex-start" href="https://wa.me/5521981071401?text=Olá!%20Visitei%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço!"/>
                        <BotaoMobile texto="Nosso instagram" img={instaBranco} cor="#000" alignSf="flex-start" href="https://www.instagram.com/arq.studioideia/"/>
                    </C.ContainerBotoes>
                </C.ContainerTextos>
            </C.BaixoLogo>
        </C.BannerEsquerda>
        <C.BannerDireita>
            <C.LogoMobile src={LogoBranca} />
            <C.mascara></C.mascara>
            <C.ImagemBanner src={imgBanner}/>
        </C.BannerDireita>
    </C.BannerContainer>
  )
}

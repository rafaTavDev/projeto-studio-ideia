import { useState, useEffect } from "react"
import * as C from "./styles"
import { TituloTraco } from "../TituloTraco"
import setaFundoPreto from "../../assets/images/setaFundoPreto.svg"

export function Servicos(){

    let arrInitValue: slideProp[] = [
        {numero: "01", titulo: "Projeto", texto: "Desde o início da conversa até a elaboração das plantas de obra, cuidamos de cada detalhe, considerando as preferências únicas dos nossos clientes. Nossas orientações são guiadas pela estética e embasadas nas melhores técnicas.", grande: true},
        {numero: "02", titulo: "Estimativa de custos", texto: "Nesta etapa, realizamos o orçamento detalhado de todos os serviços e materiais do projeto, para determinar os custos totais da obra. Isso permite que o cliente encontre a melhor estratégia para viabilizar seu investimento, incluindo possíveis ajustes no projeto para redução de custos ou a opção de dividir a obra em fases. Nosso objetivo é garantir tranquilidade e certeza de que o sonho do é viável.", grande: false},
        {numero: "03", titulo: "Gerenciamento", texto: "Definimos a sequência de trabalho, coordenamos as equipes, gerenciamos a compra de materiais, tratamos dos imprevistos inerentes às reformas, enfim organizamos e damos direcionamento para a obra. No final do processo, entregamos um as-built, com informações valiosas, como a localização das tubulações de água e gás embutidas nas paredes.", grande: false},
        {numero: "04", titulo: "Parceiros", texto: "Além da experiência profissional de mais de 15 anos, contamos com parceiros que nos acompanham ao longo dos anos, que já conhecem a nossa metodologia e tem muita sinergia entre si. ", grande: false}
    ]

    const [count, setCount] = useState<number>(0)
    const [mLeft, setMLeft] = useState<string>("")
    const [arrSlide, setArrSlide] = useState<slideProp[]>(arrInitValue)
    

    type slideProp = {
        numero: string,
        titulo: string,
        texto: string,
        grande: boolean
    }

    


    function clickEsquerda(){
        if(count > 0){
            setMLeft(`calc(${count - 1} *-1 * calc(var(--larguraSlideServicos) + 2rem))`)
            setCount(count - 1)
            console.log(arrSlide)
        }
    }

    function clickDireita(){
        if(count < (arrSlide.length - 1)){
            setMLeft(`calc(${count + 1} *-1 * calc(var(--larguraSlideServicos) + 2rem))`)
            setCount(count + 1)
            console.log(arrSlide)
        }
    }

//PELO CONSOLE A GENTE VE QUE TA MUDANDO O ARRAY MAS NÃO TA RENDERIZANDO NA TELA. TALZEZ O ARRSLIDE TENHA QUE VIRAR UM STATE.
    useEffect(()=>{
        let arrSlideClone = [...arrSlide]
        for(let i = 0; i < arrSlide.length; i++){
            arrSlideClone[i].grande = false
        }
        arrSlideClone[count].grande = true
        setArrSlide(arrSlideClone)
    }, [count])



  return (
    <C.ContainerServicos>
        <TituloTraco texto="Serviços" centralizar={true}/>
        <C.ContainerSetas>
            <C.Seta src={setaFundoPreto} onClick={clickEsquerda}/>
            <C.Seta src={setaFundoPreto} onClick={clickDireita}/>
        </C.ContainerSetas>
        <C.ContainerSlider>
            <C.Slider style={{marginLeft: mLeft}}>
                {arrSlide.map((item, index) => <C.Slide grande={item.grande} key={item.numero}>
                    <C.NumeroSlide>{item.numero}</C.NumeroSlide>
                    <C.TituloSlide>{item.titulo}</C.TituloSlide>
                    <C.DescSlide>{item.texto}</C.DescSlide>
                </C.Slide>)}
            </C.Slider>
        </C.ContainerSlider>
    </C.ContainerServicos>
  )
}

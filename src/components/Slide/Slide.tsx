import { useState, useEffect } from "react"
import * as C from "./styles"
import img1 from "../../assets/images/imgSlide1.jpg"
import img2 from "../../assets/images/imgSlide2.jpg"
import img3 from "../../assets/images/imgSlide3.jpg"
import img4 from "../../assets/images/imgSlide4.jpg"
import img5 from "../../assets/images/imgSlide5.jpg"
import img6 from "../../assets/images/imgSlide6.jpg"
import img7 from "../../assets/images/imgSlide7.jpg"
import img8 from "../../assets/images/imgSlide8.jpg"
import img9 from "../../assets/images/imgSlide9.jpg"
import img10 from "../../assets/images/imgSlide10.jpg"
import img11 from "../../assets/images/imgSlide11.jpg"

export function Slide(){
    const [mLeft, setMLeft] = useState("0vw")

    let larguraTela = screen.width

    if(larguraTela > 800){
        useEffect(() => {   
            if(mLeft == "0vw"){
                setMLeft("calc(-1.63 * 100vw)")
            }
        }, [])
    
        useEffect(() => {
            setTimeout(() => {
                if(mLeft == "0vw"){
                    setMLeft("calc(-1.63 * 100vw)")
                }
                if(mLeft == "calc(-1.63 * 100vw)"){
                    setMLeft("0vw")
                }
            }, 50000)
        }, [mLeft])
    }else{
        useEffect(() => {   
            if(mLeft == "0vw"){
                setMLeft("calc(-3.8 * 100vw)")
            }
        }, [])
    
        useEffect(() => {
            setTimeout(() => {
                if(mLeft == "0vw"){
                    setMLeft("calc(-3.8 * 100vw)")
                }
                if(mLeft == "calc(-3.8 * 100vw)"){
                    setMLeft("0vw")
                }
            }, 50000)
        }, [mLeft])
    }






    


    return (
        <C.ContainerSlides>
            <C.Slider style={{marginLeft: mLeft}}>
                <C.imagem src={img1}/>
                <C.imagem src={img2}/>
                <C.imagem src={img3}/>
                <C.imagem src={img4}/>
                <C.imagem src={img5}/>
                <C.imagem src={img6}/>
                <C.imagem src={img7}/>
                <C.imagem src={img8}/>
                <C.imagem src={img9}/>
                <C.imagem src={img10}/>
                <C.imagem src={img11}/>
            </C.Slider>
        </C.ContainerSlides>
    )
}
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import VideoAction1 from "../../assets/vendors/action1/action1-bg.mp4"
import "./action1.scss"
import LogoAction1 from "../../assets/vendors/action1/logo-white.svg"
import CardsFloats from "../../components/CardsFloats"
import TextScroll from "../../components/TextScroll"
import IconAction1 from "../../assets/vendors/action1/icon.svg"

const Action1 = () => {
    return (
        <>
            <div className="container-fluid HomeAction1">
                {/* Estrutura do Background */}
                <div className="video-bg-wrapper">
                    <video autoPlay loop muted playsInline className="bg-video">
                        <source src={VideoAction1} type="video/mp4" />
                    </video>
                    {/* Camada que faz o degradê da cor para o transparente */}
                    <div className="video-overlay-gradient"></div>
                </div>

                <div className="container">
                    <div className="row align-items-center min-vh-100">
                        <div className="col-md-6 content-side">
                            <img src={LogoAction1} alt="" />
                            <h1>Gerenciamento de Patches Inteligente e Seguro</h1>
                            <p>Gerenciamento de patches de nível empresarial — grátis para até 250 dispositivos.</p>
                            <div className="ai-input-wrapper">
                                <div className="ai-input-container">
                                    {/* Lado do Input */}
                                    <div className="input-side">
                                        <div className="ai-icon-badge">
                                            <span></span>
                                            <small>+</small>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="email@pathsec.com.br"
                                            className="ai-input"
                                        />
                                    </div>

                                    {/* Botão de Ação */}
                                    <button className="ai-btn-test">
                                        <span className="btn-text">Começar Gratís</span>
                                        <div className="icon-circle">
                                            <FaArrowRight />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid Rating">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"><h5>"Patching que realmente funcionam"</h5></div>
                        <div className="col-md"><CardsFloats /></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid TextScroll">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">   <TextScroll
                            text="Proteja sua infraestrutura inteira contra vulnerabilidades zero-day sem levantar um dedo. O Action1 faz o trabalho pesado por você."
                            type="scrub"
                            pin={true} // Ativa o grude na tela!
                            className="display-3 font-bold text-dark"
                        /></div>
                        <div className="col-md-6"><img src={IconAction1} className="img-fluid" alt="Icon Action1" /></div>

                    </div>
                </div>



            </div>
            <div className="container-fluid Action1Cards">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"> </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid VideosAction1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <p>Vertical Timeline</p>
            </div>

            <div className="contaier-fluid">
                <div className="container">
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="container-fluid CardsPrice">
                <div className="container">

                </div>
            </div>
        </>

    )
}

export default Action1
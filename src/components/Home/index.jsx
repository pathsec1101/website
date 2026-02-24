import React from 'react';
import LogoPath from "../../assets/logo-pathsec.svg";
import SplitText from "../../components/Typing";
import './Home.scss';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const HeroLayout = () => {
  return (
    <div className="layout-wrapper">

      {/* Cabeçalho Flutuante */}
      <div className="floating-header d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img src={LogoPath} alt="Logo" className="logo-img" />
        </div>

        <div className="header-actions">
          <button className="btn btn-custom-blue rounded-pill px-4 py-2 me-2">Portfólio</button>
          <button className="btn btn-custom-blue rounded-pill px-4 py-2">Suporte</button>
        </div>
      </div>

      {/* Forma Principal (Agora Azul Escura) */}
      <main className="main-shape-card">

        {/* Aba do Menu */}
        <nav className="nav-bump">
          <a href="#services">Serviços</a>
          <a href="#pricing">Contato</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Action1</a>
        </nav>

        {/* Conteúdo Central */}
        <div className="content-area p-4 p-md-5 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col">
              <h1> <SplitText
                text="O caminho mais curto entre a sua empresa e a segurança digital total!"
                className="text-2xl font-semibold text-center text-white TypingText"


                onLetterAnimationComplete={handleAnimationComplete}
                showCallback
              /></h1>
            </div>
            <div className="col">

              <section class="hero">
                <div class="hero-image">
                  <svg viewBox="0 0 600 530" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <clipPath id="stripeMask" clipPathUnits="userSpaceOnUse">
                        <path d="M0,0 H260 a40,40 0 0 1 40,40 a40,40 0 0 1 -40,40 H0 Z" />
                        <path d="M0,90 H410 a40,40 0 0 1 40,40 a40,40 0 0 1 -40,40 H0 Z" />
                        <path d="M0,180 H560 a40,40 0 0 1 40,40 a40,40 0 0 1 -40,40 H0 Z" />
                        <path d="M0,270 H460 a40,40 0 0 1 40,40 a40,40 0 0 1 -40,40 H0 Z" />
                        <path d="M0,360 H510 a40,40 0 0 1 40,40 a40,40 0 0 1 -40,40 H0 Z" />
                        <path d="M0,450 H360 a40,40 0 0 1 40,40 a40,40 0 0 1 -40,40 H0 Z" />
                      </clipPath>
                    </defs>

                    <image
                      href="https://cdn.pixabay.com/photo/2020/02/15/18/30/lady-4851699_1280.jpg"
                      width="600"
                      height="530"
                      clip-path="url(#stripeMask)"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </svg>
                </div>


              </section>









            </div>
          </div>
        </div>

        {/* Recorte do Rodapé (Crazy mode) */}
        <div className="crazy-mode-cutout">
          <span className="text-dark fw-bold me-3">Dark Mode</span>
          <button className="btn btn-sm btn-outline-dark rounded-pill me-2">On</button>
          <button className="btn btn-sm btn-custom-blue rounded-pill">Off</button>
          
        </div>

      </main>

    </div>
  );
};

export default HeroLayout;
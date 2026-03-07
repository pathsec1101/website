import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CardsFeatures.scss";

// Array de exemplo (você pode passar isso via props se preferir)
const partners = [
    { id: 1, name: "auth0" },
    { id: 2, name: "grammarly" },
    { id: 3, name: "Trustly" },
    { id: 4, name: "Schibsted" },
    { id: 5, name: "Stripe" },
];

const PartnerSlider = () => {
    const trackRef = useRef(null);
    const tweenRef = useRef(null);

    // Duplicamos os itens para garantir que a tela sempre esteja preenchida
    const duplicatedPartners = [...partners, ...partners];

    useEffect(() => {
        const track = trackRef.current;

        // Criamos a animação usando GSAP
        // Ele move o elemento -50% da sua largura total e repete infinitamente
        tweenRef.current = gsap.to(track, {
            xPercent: -50,
            ease: "none",
            duration: 25, // Aumente o número para ficar mais lento, diminua para mais rápido
            repeat: -1,
        });

        // Função de limpeza do useEffect para evitar vazamento de memória
        return () => {
            if (tweenRef.current) {
                tweenRef.current.kill();
            }
        };
    }, []);

    // Funções para pausar e continuar a animação ao passar o mouse
    const handleMouseEnter = () => tweenRef.current.pause();
    const handleMouseLeave = () => tweenRef.current.play();

    return (
        <section className="partners-section">
            {/* Aqui você pode usar classes do Bootstrap (ex: container) para alinhar o título */}
            <div className="container mb-4">
                <h2>Nossos Parceiros</h2>
                
                <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla delectus dolorem. Quae dicta repellat mollitia. Laudantium mollitia aspernatur suscipit ipsum, repellendus incidunt adipisci numquam dolore porro iste beatae at!
                </p>
                <a className="btn btnPath" href="">Contato</a>
            </div>

            <div
                className="slider-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="slider-track" ref={trackRef}>
                    {duplicatedPartners.map((partner, index) => (
                        <div className="partner-card" key={`${partner.id}-${index}`}>
                            {partner.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerSlider;
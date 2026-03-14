import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CardsFeatures.scss";

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

    // Multiplicamos os itens 4 vezes para garantir que NUNCA falte card, 
    // mesmo em monitores 4K/Ultrawide.
    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

    useEffect(() => {
        const track = trackRef.current;

        // O GSAP move a div -50% do total. Como temos 4 conjuntos, 
        // ele vai mover 2 conjuntos inteiros e resetar perfeitamente.
        tweenRef.current = gsap.to(track, {
            xPercent: -50,
            ease: "none",
            duration: 50, // Aumentei para 50s para manter a velocidade (pois a largura dobrou)
            repeat: -1,
        });

        return () => {
            if (tweenRef.current) {
                tweenRef.current.kill();
            }
        };
    }, []);

    const handleMouseEnter = () => tweenRef.current.pause();
    const handleMouseLeave = () => tweenRef.current.play();

    return (
        <section className="partners-section">
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
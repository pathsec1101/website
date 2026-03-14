import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Evita erro de SSR (Server-Side Rendering) no Gatsby
if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
}

const AnimatedText = ({ text, type = "slideUp", className = "", pin = false }) => {
    const containerRef = useRef(null);
    const triggerRef = useRef(null); // Ref externo para o Pin (fixação)

    useEffect(() => {
        const container = containerRef.current;
        const trigger = triggerRef.current;

        // Seleciona todas as palavras dentro do container
        const words = container.querySelectorAll(".word-inner");

        let animation;

        if (type === "slideUp") {
            animation = gsap.fromTo(
                words,
                { y: "110%", opacity: 0, rotateZ: 2 },
                {
                    y: "0%", opacity: 1, rotateZ: 0, duration: 0.8, stagger: 0.04, ease: "power4.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                    },
                }
            );
        } else if (type === "scrub") {
            // EFEITO 2: As palavras acendem e mudam de cor
            animation = gsap.fromTo(
                words,
                {
                    opacity: 0.15,
                    color: "#a0a0a0" // Cor inicial (cinza claro, por exemplo)
                },
                {
                    opacity: 1,
                    color: "#0b354f", // COR QUE VOCÊ QUER AO "ACENDER"
                    stagger: 0.1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: pin ? trigger : container,
                        start: pin ? "center center" : "top 80%",
                        end: pin ? "+=200%" : "bottom 40%",
                        scrub: 1.5,
                        pin: pin ? true : false,
                        pinSpacing: true,
                    },
                }
            );
        }

        return () => {
            if (animation) animation.kill();
            // Remove o scrollTrigger específico ao desmontar o componente para evitar bugs
            ScrollTrigger.getAll().forEach(t => t.trigger === trigger && t.kill());
        };
    }, [type, pin]);

    const wordsArray = text.split(" ");

    return (
        // O Wrapper externo é crucial para o "pin" funcionar perfeitamente sem quebrar o layout
        <div ref={triggerRef} style={{ width: "100%" }}>
            <div
                ref={containerRef}
                className={`animated-text ${className}`}
                style={{ display: "flex", flexWrap: "wrap", gap: "0.25em", justifyContent: "left", fontWeight: "700", fontSize: "2em" }}
            >
                {wordsArray.map((word, index) => (
                    <span
                        key={index}
                        className="word-outer"
                        style={{
                            overflow: type === "slideUp" ? "hidden" : "visible",
                            display: "inline-flex",
                            paddingBottom: "0.1em"
                        }}
                    >
                        <span
                            className="word-inner"
                            style={{ display: "inline-block", willChange: "transform, opacity" }}
                        >
                            {word}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AnimatedText;
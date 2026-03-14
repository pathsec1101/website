import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Rate1 from "../../assets/vendors/action1/rate1.webp"
import Rate2 from "../../assets/vendors/action1/rate2.webp"
import Rate3 from "../../assets/vendors/action1/rate3.webp"
import Rate4 from "../../assets/vendors/action1/rate4.webp"
import Rate5 from "../../assets/vendors/action1/rate5.webp"
import Rate6 from "../../assets/vendors/action1/rate6.webp"
import "./CardsFloats.scss"

const partners = [
    { id: 1, image: Rate1 },
    { id: 2, image: Rate2 },
    { id: 3, image: Rate3 },
    { id: 4, image: Rate4 },
    { id: 5, image: Rate5 },
    { id: 6, image: Rate6 },
];


const PartnerSlider = () => {
    const trackRef = useRef(null);
    const tweenRef = useRef(null);

    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

    useEffect(() => {
        const track = trackRef.current;

        tweenRef.current = gsap.to(track, {
            xPercent: -50,
            ease: "none",
            duration: 50,
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
        <section className="slider-wrapper">
            <div
                className="slider-viewport"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="slider-track" ref={trackRef}>
                    {duplicatedPartners.map((partner, index) => (
                        <div className="item-box" key={`${partner.id}-${index}`}>
                          <img src={partner.image} alt="" /> 
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerSlider;
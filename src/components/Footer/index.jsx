import React, { useEffect } from "react";
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import gsap from "gsap";
import "./Footer.scss";

const footerData = {
    logoName: "Pathsec",
    description: "Graphy empowers teams to transform raw data into clear, compelling visuals — making insights easier to share, understand, and act on.",
    socials: [
        { id: 1, name: "X", icon: <FaXTwitter />, link: "#" },
        { id: 2, name: "Instagram", icon: <FaInstagram />, link: "#" },
        { id: 3, name: "LinkedIn", icon: <FaLinkedinIn />, link: "#" },
        { id: 4, name: "GitHub", icon: <FaGithub />, link: "#" },
    ],
    columns: [
        { title: "Product", links: [{ name: "Features", link: "#" }, { name: "Pricing", link: "#" }, { name: "Integrations", link: "#" }] },
        { title: "Resources", links: [{ name: "Documentation", link: "#" }, { name: "Tutorials", link: "#" }, { name: "Blog", link: "#" }] },
        { title: "Company", links: [{ name: "About", link: "#" }, { name: "Careers", link: "#" }, { name: "Contact", link: "#" }] },
    ],
    bottomLinks: [{ name: "Privacy Policy", link: "#" }, { name: "Terms of Service", link: "#" }, { name: "Cookies Settings", link: "#" }],
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        // Dentro do useEffect do Footer.jsx
        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) * 0.01;
            const moveY = (clientY - window.innerHeight / 2) * 0.01;

            gsap.to(".giant-background-text", {
                x: `-50%`, // Mantém o centro
                xPercent: moveX,
                yPercent: moveY,
                duration: 1,
                ease: "power2.out"
            });
        });
        // Lógica para o modo Crazy (Grid Overlay)
        const toggleButton = document.querySelector('.crazy-mode-toggle input');
        const footerElement = document.querySelector('.main-footer');

        if (toggleButton && footerElement) {
            const handleToggle = () => {
                if (toggleButton.checked) {
                    footerElement.classList.add('crazy-mode-active');
                } else {
                    footerElement.classList.remove('crazy-mode-active');
                }
            };
            toggleButton.addEventListener('change', handleToggle);
            return () => toggleButton.removeEventListener('change', handleToggle);
        }
    }, []);

    return (
        <footer className="main-footer">
            {/* O efeito visual fica fora do container de conteúdo para não empurrar nada */}
            <div className="background-effect-container">
                <div className="grid-overlay"></div>
                {/* Aqui vai o SVG gigante que aparece ao fundo */}
                <h1 className="giant-background-text">{footerData.logoName}</h1>
            </div>

            <div className="container footer-card shadow-sm">
                <div className="footer-content row">
                    <div className="col-12 col-lg-5 brand-column">
                        <div className="logo-wrapper mb-4">
                            <span className="logo-text">{footerData.logoName}</span>
                        </div>
                        <p className="description mb-4">{footerData.description}</p>
                        <div className="social-icons">
                            {footerData.socials.map((s) => (
                                <a key={s.id} href={s.link} className="social-link">{s.icon}</a>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-lg-7 links-column">
                        <div className="row row-cols-1 row-cols-sm-3 g-4">
                            {footerData.columns.map((col, i) => (
                                <div key={i} className="col">
                                    <h5 className="column-title mb-3">{col.title}</h5>
                                    <ul className="list-unstyled">
                                        {col.links.map((l, j) => (
                                            <li key={j} className="mb-2">
                                                <a href={l.link} className="footer-link">{l.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom mt-5 pt-4 border-top">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center text-md-start">
                            <p className="copyright">&copy; {currentYear} {footerData.logoName}</p>
                        </div>
                        <div className="col-md-8 text-center text-md-end">
                            <div className="legal-links d-flex gap-4 justify-content-center justify-content-md-end">
                                {footerData.bottomLinks.map((link, i) => (
                                    <a key={i} href={link.link} className="legal-link">{link.name}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
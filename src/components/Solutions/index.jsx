import React from 'react';
import { FiArrowRight, FiShield, FiSettings, FiActivity } from 'react-icons/fi';
import "./Solutions.scss";

const features = [
    {
        id: "01",
        title: "Monitor risk across your stack",
        description: "Scan your publicly and privately accessible servers, cloud systems, websites, and endpoint devices using industry-leading scanning engines.",
        icon: <FiActivity size={40} color="#fff" />,
        tag: "Learn more"
    },
    {
        id: "02",
        title: "Effortless Compliance & Reporting",
        description: "Automate your compliance checks for SOC2, ISO27001, and GDPR with detailed technical exports and executive summaries.",
        icon: <FiSettings size={40} color="#fff" />,
        tag: "Learn more"
    },
    {
        id: "03",
        title: "Continuous Penetration Testing",
        description: "Go beyond automated scans with our hybrid approach, combining AI efficiency with human expertise for deep security analysis.",
        icon: <FiShield size={40} color="#fff" />,
        tag: "Learn more"
    }
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header">
                    <h2 className="features-header__title">Como a <br /> Pathsec vai te ajudar?</h2>
                    <div className="features-header__right">
                        <p className="features-header__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quia nemo. Unde dolorum a laboriosam aut.
                        </p>
                        <button className="features-header__btn">Demonstração <span>→</span></button>
                    </div>
                </div>

                <div className="row g-4 mt-5">
                    {features.map((f) => (
                        <div key={f.id} className="col-lg-4">
                            <div className="feature-card">
                                {/* O Notch precisa estar aqui para o alinhamento absoluto ser perfeito */}
                                <div className="feature-card__notch">
                                    <span className="feature-card__number">/ {f.id}</span>
                                </div>

                                <div className="feature-card__content">
                                    <div className="feature-card__visual">
                                        <div className="feature-card__icon-wrapper">
                                            {/* Aqui você pode substituir pelo componente 3D/Imagem futuramente */}
                                            {f.icon}
                                        </div>
                                    </div>

                                    <div className="feature-card__body">
                                        <h3 className="feature-card__title">{f.title}</h3>
                                        <div className="feature-card__expandable">
                                            <p className="feature-card__description">{f.description}</p>
                                            <button className="feature-card__link">
                                                {f.tag} <FiArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
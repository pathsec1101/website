import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./FormContainer.scss";

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const elements = formRef.current?.querySelectorAll(".gsap-reveal") || [];
    const titleElements = document.querySelectorAll(".title-reveal");

    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(titleElements, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 }
    ).fromTo(elements,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.3"
    );
  }, [status]); // Reinicia animação se o status mudar (para a tela de sucesso)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-empresas", ...formData }),
    })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            
            <div className="form-header text-center mb-5">
              <h2 className="title-reveal fw-bold">Fale com Especialistas</h2>
              <p className="title-reveal text-white">Preencha os dados abaixo e entraremos em contato.</p>
            </div>

            {status === "success" ? (
              <div className="alert alert-success success-card gsap-reveal" role="alert">
                <h4 className="alert-heading">Mensagem enviada!</h4>
                <p>Obrigado. Nossa equipe entrará em contato em breve.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                name="contact-empresas"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form shadow shadow-lg"
              >
                <input type="hidden" name="form-name" value="contact-empresas" />
                <div hidden><input name="bot-field" onChange={handleChange} /></div>

                <div className="form-floating mb-3 gsap-reveal">
                  <input type="text" className="form-control shadow-none" id="nameInput" name="name" placeholder="Nome" required value={formData.name} onChange={handleChange} />
                  <label htmlFor="nameInput">Nome completo</label>
                </div>

                <div className="form-floating mb-3 gsap-reveal">
                  <input type="email" className="form-control shadow-none" id="emailInput" name="email" placeholder="E-mail" required value={formData.email} onChange={handleChange} />
                  <label htmlFor="emailInput">E-mail corporativo</label>
                </div>

                <div className="form-floating mb-4 gsap-reveal">
                  <input type="text" className="form-control shadow-none" id="companyInput" name="company" placeholder="Empresa" required value={formData.company} onChange={handleChange} />
                  <label htmlFor="companyInput">Nome da empresa</label>
                </div>

                {status === "error" && <div className="alert alert-danger mb-3">Erro ao enviar. Tente novamente.</div>}

                <div className="d-grid gsap-reveal">
                  <button type="submit" className="btn btn-submit" disabled={status === "submitting"}>
                    {status === "submitting" ? <span className="spinner-border spinner-border-sm me-2"></span> : null}
                    {status === "submitting" ? "Enviando..." : "Solicitar Contato"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
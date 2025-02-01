import { useState } from "react";
import "../styles/session08.css";

const Session08 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faq = [
    {
      question: "O evento é ao vivo?",
      answer:
        "Sim, e será uma oportunidade única para interagir com Sylvia e outros colegas Médicos.",
    },
    {
      question: "Preciso de alguma experiência específica para participar?",
      answer:
        "Não! A Imersão é para Médicos recém-formados ou que atuam na atenção primária e buscam ser mais resolutivos.",
    },
    {
      question: "Haverá replay?",
      answer:
        "Não, o conteúdo é exclusivo para quem participar ao vivo, garantindo um aprendizado imersivo.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container-session08">
      <h2 className="title-session08">Dúvidas Frequentes</h2>
      {
        <div className="faq-section">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{item.question}</div>
              {openIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      }
      <a
        className="cta-button btn-session08"
        href="https://pay.hub.la/kUnf7nnTbBbsiegg5Oi4"
        target="_blank"
      >
        Quero participar
      </a>
      <div className="footer-session08 ">
        <p>Dra. Sylvia Christine - SCPM DIGITAL LTDA | CNPJ:  59.167.404/0001-17</p>
      </div>
    </div>
  );
};

export default Session08;

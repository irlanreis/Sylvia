import "../styles/session01.css";
import logo from "../assets/backgorunds-Mobile-Tablet/logo-transparente.png";

function Session01() {
  return (
    <div className="container-session01">
      <div className="header">
        <img src={logo} alt="logo-lp" className="img-logo" />
        <p>12 de Fevereiro às 20h</p>
      </div>
      <div className="content">
        <p>
        <strong className="destaque01">Alta demanda?</strong> pouco tempo e muitas queixas? Descubra <strong className="destaque01">como atender na APS com eficiência e segurança</strong> sem comprometer a qualidade!
        </p>
        <a
          className="cta-button"
          href="https://pay.hub.la/kUnf7nnTbBbsiegg5Oi4"
          target="_blank"
        >
          Garantir meu lugar
        </a>
      </div>
    </div>
  );
}

export default Session01;

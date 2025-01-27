import "../styles/session01.css";
import logo from "../assets/backgorunds_Sylvia/logo-sylvia.jpg";

function Session01() {
  return (
    <div className="container-session01">
      <div className="header">
        <img src={logo} alt="logo-lp" className="img-logo" />
        <p>12 de Fevereiro às 20h</p>
      </div>
      <div className="content">
        <p>
          Participe de uma imersão de 2h exclusiva para Médicos e descubra como
          ser mais resolutivo na Atenção Primária e transformar seus
          atendimentos médicos.
        </p>
        <button className="cta-button">Garantir meu lugar</button>
      </div>
    </div>
  );
}

export default Session01;

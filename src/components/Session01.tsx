import "../styles/session01.css";

function Session01() {
  return (
    <div className="container-session01">
      <div className="header">
        <div className="date">
          <h1>Descomplicando a APS</h1>
          <p>12 de fevereiro às 20h</p>
        </div>
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

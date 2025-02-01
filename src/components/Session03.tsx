import "../styles/session03.css";

function Session03() {
  return (
    <div className="container-session03">
      <h1 className="title-session03">Pra quem é a aula?</h1>
      <ul className="list-session03">
        <li>
          Para médicos que se sentem inseguros ao atuar na APS e que sentem a
          pressão por lidar com pacientes com múltiplas demandas.
        </li>
        <li>
          Para você que deseja aprender técnicas práticas para ser mais
          resolutivo no dia a dia.
        </li>
        <li>
        Para você que deseja transformar a forma como atende seus pacientes, entregando uma medicina baseada em evidências aliada a um cuidado mais qualificado e humanizado.
        </li>
      </ul>
      <div className="highlight-session03 price-session03">
        <h2>Investimento</h2>
        <p className="text">
          Tudo isso de{" "}
          <span className="old-price-session03">
            R$ <del>499,00</del>
          </span>{" "}
          por
        </p>
        <p className="price-session03-finally">R$ 79,00</p>
      </div>
      <a
        className="cta-button cta-button-session03"
        href="https://pay.hub.la/kUnf7nnTbBbsiegg5Oi4"
        target="_blank"
      >
        Sim, quero participar
      </a>
    </div>
  );
}

export default Session03;

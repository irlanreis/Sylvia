import '../styles/session03.css'

function Session03() {
  return (
    <div className="container-session03">
      <h1 className="title-session03">Pra quem é a aula?</h1>
      <ul className="list-session03">
        <li>
          Médico que se sente inseguro ao atuar na APS e que sente a pressão
          por lidar com pacientes com múltiplas demandas.
        </li>
        <li>Quer aprender técnicas práticas para ser mais resolutivo no dia a dia.</li>
        <li>
          Deseja transformar a forma como atende seus pacientes, entregando uma
          medicina baseada em evidências aliada a um cuidado mais qualificado e
          humanizado.
        </li>
      </ul>
      <h2 className="subtitle-session03">Detalhes do evento</h2>
      <div className="details-session03">
        <p>
          <strong>Data:</strong> 12 de fevereiro de 2024 (quarta-feira)
        </p>
        <p>
          <strong>Horário:</strong> 20 horas
        </p>
        <p>
          <strong>Local:</strong> <span className="highlight-session03">100% Online</span>
          <br />
          (Acesso Exclusivo - sala secreta)
        </p>
      </div>

      <div className='highlight-session03 price-session03'>
      <p>
          De <del>499,00 reais</del>
          <br />
          <span className="price-session03-finally">Por 79,00 reais.</span>
        </p>
      </div>
      <button className="cta-button-session03">Sim, quero participar</button>
    </div>
  )
}

export default Session03
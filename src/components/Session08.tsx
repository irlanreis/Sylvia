import '../styles/session08.css';

const Session08 = () => {
  return (
    <div className="container-session08">
      <h2 className="title-session08">Dúvidas Frequentes</h2>
      <div className="card-session08">
        <h3 className="subtitle-session08">O evento é ao vivo?</h3>
        <p>Sim, e será uma oportunidade única para interagir com Sylvia e outros colegas Médicos.</p>
      </div>
      <div className="card-session08">
        <h3 className="subtitle-session08">Preciso de alguma experiência específica para participar?</h3>
        <p>Não! A Imersão é para Médicos recém-formados ou que atuam na atenção primária e buscam ser mais resolutivos.</p>
      </div>
      <div className="card-session08">
        <h3 className="subtitle-session08">Haverá replay?</h3>
        <p>Não, o conteúdo é exclusivo para quem participar ao vivo, garantindo um aprendizado imersivo.</p>
      </div>
      <div className='highlight-session03 price-session03'>
      <p>
          De <del>499,00 reais</del>
          <br />
          <span className="price-session03-finally">Por 79,00 reais.</span>
        </p>
      </div>
      <button className="cta-button btn-session08">Quero participar</button>
      <div className='footer-session08'>
        <p>
        Dra. Sylvia Christine - Médica de Família e Comunidade | CRM: 19917 RQE: 11763
        </p>
      </div>
    </div>
  );
};

export default Session08;

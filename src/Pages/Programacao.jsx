// eslint-disable-next-line no-unused-vars
import styles from './Programacao.css';



export default function Programacao() {





  return (
    <div className="root">
      <div className='evento-list'>
        <div className='evento-card green-card'>
          <h3 className='evento-titulo'>3ª Edição do Prêmio Chica Lopes</h3>
          <span className='evento-data'>07/11 - 19h</span>
          <span className='evento-local'>Local: Câmara Municipal de São Carlos</span>
          <span className='evento-descricao'>Resumo:  Chica Lopes: Atriz e pioneira são-carlense, destacou-se no teatro, rádio e TV, e recebeu o Prêmio Zumbi dos Palmares em 2005, como importante representante da comunidade negra.
          </span>
        </div>
        <div className='evento-card yellow-card'>
          <h3 className='evento-titulo red-title'>Roda de conversa: Resgatando a História dos Ancestrais Escravizados em São Carlos</h3>
          <span className='evento-data'>09/11 - 19H- 21H</span>
          <span className='evento-local'>Local: Instituto Lumbandanga - Rua Miguel João, 410.</span>
          <span className='evento-descricao'>
            Ana Gabriela da S. Santos e Micheli Ferreira Lima realizam uma roda de conversa no Instituto Lumbandanga sobre a História dos Ancestrais Escravizados na cidade de São Carlos.
          </span>
        </div>
        <div className='evento-card red-card'>
          <h3 className='evento-titulo red-title'>LEME SAMBA DA ANTIGA - Homenagem a Candeia</h3>
          <span className='evento-data'>10/11 - 16h - 17h30</span>
          <span className='evento-local'>Local: SESC São Carlos.</span>
          <span className='evento-descricao'>
            O grupo homenageia Antônio Candeia Filho, ou simplesmente Candeia, cantor e compositor que neste ano completaria 89 anos de vida, uma grande referência na história da música brasileira.
          </span>
        </div>
        <div className='evento-card black-card'>
          <h3 className='evento-titulo red-title'>Batalha da Alcatéia</h3>
          <span className='evento-data'>10/11 - 16h - 22h</span>
          <span className='evento-local'>Local: Estação Ferroviária de São Carlos</span>
        </div>

      </div>


    </div>
  );
};



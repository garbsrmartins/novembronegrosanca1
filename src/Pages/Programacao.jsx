// eslint-disable-next-line no-unused-vars
import { Button, ButtonGroup } from '@material-ui/core';
import styles from './Programacao.css';



export default function Programacao() {
  return (
    <div className="root">
      <div className='evento-list'>
        <div className='main-card'>
          <span className='agenda-titulo'>Agenda Unificada <br></br> Novembro Negro</span>
          <span className='agenda-subtile'>São Carlos - 2024</span>
          <span className='agenda-unificada-description'>A “Agenda Unificada Novembro Negro - São Carlos" é resultante de um mapeamento de atividades e ações que serão realizadas em novembro e estão voltadas para promoção da luta antirracista e para valorização da comunidade negra na nossa cidade. É uma iniciativa conjunta e colaborativa de diversas instituições e da sociedade civil de São Carlos. Compartilharemos semanalmente os diversos eventos que integram a comemoração do mês da consciência negra. Acompanhe, compartilhe e envie sugestões!<br></br>
          </span>
          <span className='agenda-unificada-description' >  Para inscrever seu evento preencha o formulário, entre em contato pelo Instagram @novembronegrosanca ou nos envie um email.
            Vamos nos aquilombar São Carlos!
            Todos os eventos desta semana são gratuitos!</span>


          <ButtonGroup className='button-grp' variant="contained" aria-label="Basic button group">
            <Button
              onClick={() => window.open('https://forms.gle/2MFFpzD7SX2Vqh9S9', '_blank')}
              color='primary'
            >
              Formulário
            </Button>

            <Button
              color='secondary'
              onClick={() => window.location.href = 'mailto:novembronegrosaocarlos@gmail.com'}
            >
              E-mail
            </Button>
          </ButtonGroup>

        </div>
        <div className='separator'>
          <span className='separator-title'>De 7 - 10 de Novembro</span>
        </div>
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
            Contato: (16) 99991-8193
          </span>
        </div>
        <div className='evento-card black-card'>
          <h3 className='evento-titulo red-title'>Batalha da Alcatéia</h3>
          <span className='evento-data'>10/11 - 16h - 22h</span>
          <span className='evento-local'>Local: Estação Ferroviária de São Carlos</span>
          <span className='evento-descricao'>
            Festival de Rap para valorizar a cultura e artistas locais.
            Contato: 16991172038
          </span>
        </div>
      </div>


    </div>
  );
};



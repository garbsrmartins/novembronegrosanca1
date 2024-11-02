// App.tsx
import { Route, Routes } from 'react-router-dom';
import Navbarmenu2 from "./components/menu/Navbarmenu";
import { EventoInterface } from './constants';
import Footer from "./Footer/Footer";
import Home2 from './Home2/Home2';
import Programacao from "./Pages/Programacao";

const eventos: EventoInterface[] = [
  {
    data: new Date('2024-11-09T19:00:00'),
    horario: '19H',
    duracao: '2 horas',
    titulo: 'Resgatando a História dos Ancestrais Escravizados em São Carlos',
    descricao: 'Esta roda de conversa tem como objetivo promover uma reflexão profunda sobre a escravidão em São Carlos e as histórias de resistência e superação dos escravizados que moldaram a cidade. A atividade contará com a participação especial de Micheli, descendente do escravizado Felício, que compartilhará sua jornada de descoberta sobre a sua ascendência e como isso impactou sua identidade e a relação com a sua história familiar. A roda de conversa buscará resgatar a memória dos ancestrais escravizados, valorizando suas trajetórias, lutas e contribuições para a formação da cidade e de seus habitantes. Ao dar voz a Micheli e a outros participantes, pretendemos criar um espaço de diálogo, respeito e acolhimento, onde seja possível refletir sobre o legado da escravidão e suas repercussões atuais, além de homenagear aqueles que foram historicamente silenciados',
    local: {
      name: 'Grêmio Recreativo Flor de Maio',
      link: 'https://maps.app.goo.gl/2UQMPVpfxxQzfMh88'
    },
    status: 'ativo',
    publico: 'Aberto ao público.'
  },
  {
    data: new Date('2024-11-09T09:00:00'),
    horario: '9H',
    duracao: '3 horas',
    titulo: 'Experimentações artísticas afrorreferenciadas',
    descricao: 'Experimentações artísticas para artistas e não artistas, amadores e iniciantes, a partir de perspectiva afrorreferenciada, com uso de materiais naturais (argila, pintura com terras, e outros).',
    local: {
      name: 'UFSCAR - Departamento de Terapia Ocupacional',
      link: 'https://maps.app.goo.gl/5xnTYUYdivNRpv9ZA'
    },
    status: 'ativo',
    publico: 'Pessoas interessadas em experimentação artistica. Pode ou não ter experiencia previa. '
  },
  {
    data: new Date('2024-11-22T18:18:00'),
    horario: '18H - 21H',
    duracao: '3 horas',
    titulo: 'Palestra sobre acesso e permanência negra no ensino superior ',
    descricao: 'Palestra sobre ações afirmativas raciais, necessidades e ações em permanência estudantil voltadas a estudantes negros e negras no ensino superior',
    local: {
      name: 'Anfiteatro Bento Prado UFSCar',
      link: 'https://maps.app.goo.gl/2UQMPVpfxxQzfMh88'
    },
    status: 'ativo',
    publico: 'Estudantes e docentes do ensino superior e outras pessoas interessadas.'
  },
  {
    data: new Date('2024-11-10T16:00:00'),
    horario: '16H',
    duracao: '2 horas',
    titulo: 'Leme Samba da Antiga',
    descricao: 'O grupo de Samba LEME SAMBA DA ANTIGA estará homenageando um dos maiores compositores da Escola de Samba  Portela: CANDEIA.',
    local: {
      name: 'SESC - São Carlos',
      link: 'https://maps.app.goo.gl/ssUhYNAX1KqosNoo9'
    },
    status: 'ativo',
    publico: 'Aberto ao público'
  },
  {
    data: new Date('2024-11-10T16:00:00'),
    horario: '16H - 22H',
    duracao: '6 horas',
    titulo: 'Batalha da Alcatéia - 2º Festival de Rap na Estação',
    descricao: 'Festival musical gratuito, com ênfase no gênero Rap, unindo e celebrando o movimento Hip Hop para maior valorização da nossa cultura e dos artistas da cidade de São Carlos. ',
    local: {
      name: 'Estação Ferroviária de São Carlos',
      link: 'https://maps.app.goo.gl/JNjSmL8bagksK13D9'
    },
    status: 'ativo',
    publico: 'Todos que gostam de Hip Hop.'
  },
  {
    data: new Date('2024-11-11T19:00:00'),
    horario: '16H',
    duracao: '2 horas',
    titulo: 'Reflexões sobre as leis e a Desigualdade Racial (Comissão de Igualdade Racial OAB/SP Subseção São Carlos)',
    descricao: 'De acordo com a Lei Municipal 11546/2018 Dia de Reflexão Jurídica da Desigualdade Racial no Município, faremos um diálogo com advogados e a população sobre a questão racial em São Carlos ',
    local: {
      name: 'Câmara dos Vereadores ou OAB',
      link: undefined
    },
    status: 'ativo',
    publico: 'Aberto ao público.'
  },
  {
    data: new Date('2024-11-20T14:00:00'),
    horario: '16H',
    duracao: '2 horas',
    titulo: 'Projeto MAMBA Brasil - Palestra... mulheres em movimento',
    descricao: 'Motivacional',
    local: {
      name: 'Av.comendador Alfredo Maffei 1605',
      link: 'https://maps.app.goo.gl/oHt7ksVadNFZszAG8'
    },
    status: 'ativo',
    publico: 'Infanto/juvenil/ adultos '
  },
  {
    data: new Date('2024-11-13T19:00:00'),
    horario: '11H50m - 12h30',
    duracao: '1 hora',
    titulo: '2ª Vamos nos Aquilombar - FOTO UFSCar NEGRA',
    descricao: 'A 2ª edição do Vamos nos Aquilombar - FOTO UFSCar NEGRA celebra o Novembro Negro com uma foto coletiva que simboliza a força, a diversidade e a união das pessoas pretas e pardas da comunidade universitária. A iniciativa é promovida pela Secretaria Geral de Ações Afirmativas, Diversidade e Equidade (SAADE) e pelo Núcleo de Estudos Afro-Brasileiros (Neab), reafirmando o compromisso da UFSCar com a valorização e a visibilidade da população negra.',
    local: {
      name: 'UFSCar - Portaria da Entrada Sul ',
      link: 'https://maps.app.goo.gl/hbuhygi2oGUqf4qX9'
    },
    status: 'ativo',
    publico: 'Toda comunidade acadêmica da UFSCAR.'
  },
  {
    data: new Date('2024-11-19T18:00:00'),
    horario: '18H - 20H',
    duracao: '2 horas',
    titulo: 'Sarau Cultural Celinha Pereira ',
    descricao: 'O Sarau surge a partir de diálogo com amigo próximo de Celinha que busca resgatar a cultura poética na cidade.Com a finalidade de dar continuidade a isso, propomos a criação do Sarau e convidaremos artistas negres a participarem.',
    publico: 'Todos que amam poemas.',
    status: 'ativo',
    local: {
      name: 'Grêmio Recreativo Flor de Maio',
      link: 'https://maps.app.goo.gl/2UQMPVpfxxQzfMh88'
    }
  },
  {
    data: new Date('2024-11-12T19:00:00'),
    horario: '19H - 21H',
    duracao: '2 horas',
    titulo: 'Instituto Lumbandanga Apresenta: SoulJazz e Afrosil - Show Musical',
    descricao: 'No dia 12 de novembro as 19h no Centro de Convivência área 1  da USP São Carlos, o Instituto Lumbandanga apresenta dois shows com os projetos SoulJazz e Afrosil. SoulJazz, fundada em 2006, apresenta uma proposta de resgate da riqueza das características do povo negro realizando releituras da musica instrumental e acrescentando novas rítmicas nos standards de Jazz.Afrosil  fundada em 2023, formado em sua maioria por alunos PEC-G de diversos países do continente Africano. com o objetivo de construir um intercâmbio cultural e musical entre a sonoridade brasileira e africana.',
    local: {
      name: 'Centro de Convivência Area 1 - USP São Carlos',
      link: 'https://maps.app.goo.gl/L9qX3c8Ssp55qWtW6'
    },
    status: 'ativo',
    publico: 'Aberto ao público.'
  },

]

function App() {
  return (
    <>
      <Navbarmenu2 />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/programacao" element={<Programacao eventos={eventos} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


import React from 'react'
import { makeStyles} from '@material-ui/core'
import separador from './Separador.png'




import './Cards.css'





const useStyles = makeStyles ((theme) => ({





texto: {

    

fontFamily: 'Montserrat',
display: 'flex',
fontSize: '1.8em',
width: '80%',
textAlign: 'center',
fontWeight: 'bold',
marginBottom: '50px',
margin: 'auto',

"@media (max-width: 1280px)": {
    fontSize: '1.5em',
    float: 'none',
    justifyItems: 'center',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },


},


background:{ 

  backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/texturapapel.png'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundAttachment: 'fixed',
  "@media (max-width: 900px)": {
    backgroundSize: 'cover',
  }
  
},



description: {
    

fontFamily: 'Montserrat',
padding: '1em',
fontSize: '0.7em',
marginBottom: '20px',
textAlign: 'left',
display: 'flex',



},

reserva: {
    fontFamily: 'Montserrat',

fontSize: '2.2em',
width: '70%',
textAlign: 'center',
fontWeight: 'bold',

margin: 'auto',

"@media (max-width: 1280px)": {
    fontSize: '2em',
    float: 'none',
    justifyItems: 'center',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },


},

brand: {

    display: 'inline-block',
    textAlign: 'center',
    fontSize: '2em',
    margin: '10px 10px 50px 10px',
    color: 'black',
},

button: {
  color: 'white',
  textDecoration:'none',
  padding: '20px',
  backgroundColor: 'black',
  borderRadius: '5px',
  fontSize: '0.7em',
  
},

yellow: {

  backgroundColor: '#FFE9A9',
  padding: '30px',
},

blue: {

  backgroundColor: '#E5FBFF',
  padding: '30px',
},
title2: {

  fontFamily: 'Elephant V1',
  paddingTop: '60px',
  textAlign:'center',
  fontSize: '2em',
  height: '30vh',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',

  "@media (max-width: 1280px)": {
    fontSize: '2em',
    paddingTop: '60px',
   
  },
},
cards: {

  fontFamily: 'Elephant V1',
  fontSize: '1.3em',
  width: '60%',
  margin: 'auto',
  color: 'dark-gray',
  paddingBottom: '2em',
  lineHeight: '1.5em',
  "@media (max-width: 1280px)": {
    fontSize: '1em',
    
   
  },

},
data: {

  fontFamily: 'Elephant V1',
  fontSize: '1.5em',
  width: '60%',
  margin: 'auto',
  "@media (max-width: 1280px)": {
    fontSize: '1.1em',
    
   
  }
  

},

image: {


  margin: 'auto',
  alignItems: 'center',
  display: 'block',
  padding: '1em',
  width: '60%'
  

}



}))

function CardsQuartos() {

    const classes = useStyles ();
  return (
    <>
   <div className={classes.background}>
   <div className={classes.title2}> Programação</div>

   <p className={classes.data}>Dia 19</p> <br></br>
   <p className={classes.cards}>Batalha de MC e apresentação de Street Dance (Circuito Arena Especial)<br></br> 18h às 20h<br></br>  Prefeitura de São Carlos (CEMAC) -  Teatro de Arena</p>  
       
   <img src={separador} className={classes.image} alt="separador"/>

   <p className={classes.data}>Dia 20</p> <br></br>
   <p className={classes.cards}>Marcha pela verdade histórica africana em São Carlos<br></br> 9h<br></br> Centro Afro Odette dos Santos</p>
   
   <p className={classes.cards}>24ª Festa Afrodescente<br></br> 14h às 21h<br></br> Campo do Zuzão, Avenida Araraquara</p>  
     
   <p className={classes.cards}>Apresentação do Coral Eu canto minha Africa<br></br> 15h<br></br>Teatro Municipal</p>  
     
   <p className={classes.cards}>Show "A consciência e arte negra de Luiz Carlos Da Vila" com o sambista Leme<br></br> 16h<br></br>  SESC São Carlos</p>  
  
   <img src={separador} className={classes.image} alt="separador"/>

   <p className={classes.data}>Dia 21</p> <br></br>
   <p className={classes.cards}>Mostra Ecofalante, filme: "Essa Terra é Meu Quilombo"<br></br> Sessão 1: Sala 182 AT8 - 10h<br></br>Sessão 2: Sala 188 AT8 - 19h <br></br>  UFSCar</p>   
   
   <p className={classes.cards}> Palestra: "Juiz de Garantias, apuração e repressão aos crimes de racismo" Palestrante: Dr. Hédio Silva Junior<br></br> 19h<br></br>Casa da Advocacia e da Cidadania de São Carlos</p> 

   <p className={classes.cards}> Palestra com o  mestre quilombola e ativista político Nêgo Bispo (Abertura com a banda AFROSIL ÀS 19H30)<br></br> 20h<br></br>Auditório “Sérgio Mascarenhas” IFSC - USP São Carlos</p> 

   <img src={separador} className={classes.image} alt="separador"/>

   <p className={classes.data}>Dia 22</p> <br></br>
   <p className={classes.cards}>FOTO "UFSCAR NEGRA" - Fotografia com os alunos negros<br></br> 11h50<br></br>UFSCAR Portaria da Entrada Sul</p>  
       
   <p className={classes.cards}>Palestra "O Negro no Empreendimento" - Palestrantes: Clhis Alberty Silva(Afira Investimentos) e Eliane Cavalcante Silva (Sebrae - SP)<br></br> 19h<br></br>ACISC - Auditório</p>  
       
       
   <p className={classes.data}>Dia 23</p> <br></br>
   <p className={classes.cards}>Desfile de Trajes Africanos "Retratos da diáspora africana: Uma jornada de expressão e identidade"<br></br> 19h<br></br>Flor de Maio</p>       
  
   <img src={separador} className={classes.image} alt="separador"/>
    
   <p className={classes.data}>Dia 24</p> <br></br>
   <p className={classes.cards}>Afrosarau  <br></br> 17h - 19h<br></br>  UFSCAR, Teatro de Bolso</p> 
   <p className={classes.cards}>Show - Menu Musical - Nara Dom <br></br> 20h<br></br>  SESC, Área Externa</p>  
       
   <img src={separador} className={classes.image} alt="separador"/>

   <p className={classes.data}>Dia 25</p> <br></br>
   <p className={classes.cards}>Sonara Brasil<br></br> 13h30<br></br>  SESC, Sala de atividades corporais</p> 
   <p className={classes.cards}>Malungo Ixi<br></br> 16h<br></br>SESC, Galpão</p>  
       
   <img src={separador} className={classes.image} alt="separador"/>
   <p className={classes.data}>Dia 26</p> <br></br>
   <p className={classes.cards}>Show: Marissol Mwaba, François Muleka e Myriam Mwewa Congo - Brasilidades<br></br> 16h<br></br>  SESC, Área Externa</p>  
   <p className={classes.cards}>Feira da Economia Soldária:"Arte negra na praça" - Barracas tetmáticas, roda de capoeira e artistas locais<br></br>16h às 21h<br></br>Praça XV de Novembro</p> 
  
         
   <img src={separador} className={classes.image} alt="separador"/>
   <p className={classes.data}>Dia 27</p> <br></br>
   <p className={classes.cards}>PODCAST sobre racismo no esporte com Flávio Eduardo da comissão de igualdade racial da OAB<br></br> 19h30<br></br>No Canal Podtoss</p>  

       
   <img src={separador} className={classes.image} alt="separador"/>

   <p className={classes.data}>Dia 28</p> <br></br>
   
   <p className={classes.cards}>Palestra: Por uma saúde mental anti-racista<br></br>14h ás 17h<br></br>CASM/UFSCar</p> 
   <p className={classes.cards}>Oficina - Do 0 à passarela (28/11 à 02/12) <br></br>18h30<br></br>SESC</p>
          
   <img src={separador} className={classes.image} alt="separador"/>

   <p className={classes.data}>Dia 29</p> <br></br>
   <p className={classes.cards}>Black Tilsp: relações de gênero e etnia na comunidade surda brasileira<br></br>9h às 11h/ 14h às 16h/ 19h às 21h<br></br>Evento Online Gepestilsp UFSCar</p>  
  
   <p className={classes.cards}>Premiação "Selo Carolina de Jesus<br></br>19h<br></br> Câmara Municipal</p> 

   <p className={classes.cards}>USP Filarmônica, com as solistas Chiara Santoro (soprano) e Denise de Freitas (mezzo-soprano), concerto em homenagem ao dia da Consciência Negra, com obras de artistas pretos, como Cruz e Souza, Henrique Alves de Mesquita e Dolores Duran, além de composições inéditas de Lucas Eduardo da Silva Galon, Silvia Maria Pires Cabrera Berg, Lucas Pigari, José Gustavo Julião de Camargo e Rubens Russomanno Ricciardi, que também será o regente deste espetáculo.<br></br> 20h<br></br> Catedral</p>  
   
   <p className={classes.cards}>Oficina - Do 0 à passarela <br></br> 18h30<br></br>  SESC</p>  


   <img src={separador} className={classes.image} alt="separador"/> 

   <p className={classes.data}>Dia 30</p> <br></br>
   <p className={classes.cards}>Oficina - Do 0 à passarela <br></br>18h30<br></br>SESC</p> 
   <p className={classes.cards}>Oficina de Escrevivências com Daiane Silva<br></br> 14h<br></br>UFSCAR - NAP-Sala 02</p>  
   <p className={classes.cards}>Roda de Conversa "Aquilombamento acadêmico em uma perspectiva feminista negra"<br></br> 19h<br></br>UFSCAR - NAP-Sala 02</p>  
          
   <img src={separador} className={classes.image} alt="separador"/>

   <p className={classes.data}>Dia 1 (Dezembro)</p> <br></br>
   <p className={classes.cards}>Oficina - Do 0 à passarela <br></br>18h30<br></br>SESC</p> 
   <img src={separador} className={classes.image} alt="separador"/>

   <p className={classes.data}>Dia 2 (Dezembro)</p> <br></br>
   <p className={classes.cards}>Desfile - Do 0 à passarela <br></br>17h<br></br>SESC</p> 
   <img src={separador} className={classes.image} alt="separador"/>
   
    
   
    
    </div>
       
        
    

   
  

        
        
     
    
    
        
        
   
    
    </>
    
    
    
    

  )
}

export default CardsQuartos

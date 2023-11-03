import React from 'react'
import { makeStyles} from '@material-ui/core'



import './Cards.css'
import SwiperPiramide from '../Swiper/ImagesPiramide/Swiper';
import Swiper from '../Swiper/Swiper';
import SwiperSabia from '../Swiper/ImagesSuíteSabiá/sabia';
import SwiperTucano from '../Swiper/ImagesSuíteTucano/tucano';




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

  paddingTop: '60px',
  textAlign:'center',
  fontSize: '3em',
  height: '30vh',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',

  "@media (max-width: 1280px)": {
    fontSize: '2em',
    paddingTop: '60px',
   
  },
}


}))

function CardsQuartos() {

    const classes = useStyles ();
  return (
    <>
   
   <div className={classes.title2}> Quartos</div>
        <div className={classes.yellow}>
        
        <div className={classes.texto}><p> Aruna Casa Piramide<br></br> <br></br>
        <span className={classes.description}>A Aruna Casa Pirâmide faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante. Está localizado no alto da montanha, com o privilégio de uma vista exuberante para o mar e algumas ilhas da região. Isolado do sistema urbano, em meio a natureza preservada do sul da Ilha de Florianópolis, o Aruna foi no passado um Eco Spa, após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span>
        
        <a href="/piramide" className={classes.button}> Saiba Mais</a>
        </p>
        </div>
        
        
    <SwiperPiramide/>
    
    </div>
    <div className={classes.blue}>
    <div className={classes.texto}><p> Casa Refúgio Beija Flor<br></br> <br></br>
        <span className={classes.description}>A Casa Refúgio Beija Flor faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante. Está localizado no alto da montanha, com o privilégio de uma vista exuberante para o mar e algumas ilhas da região. Isolado do sistema urbano, em meio a natureza preservada do sul da Ilha de Florianópolis, o Aruna foi no passado um Eco Spa, após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span>
        
        <a href="/beija-flor" className={classes.button}> Saiba Mais</a>
        </p>
        
        
    </div>
    <Swiper/>
   
    </div>
   
    <div className={classes.yellow}>
        <div className={classes.texto}><p> Suíte Sabiá<br></br> <br></br>
        <span className={classes.description}>A suíte Sabiá faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante. Está localizado no alto da montanha, com o privilégio de uma vista exuberante para o mar e algumas ilhas da região. Isolado do sistema urbano, em meio a natureza preservada do sul da Ilha de Florianópolis, o Aruna foi no passado um Eco Spa, após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span>
        
        <a href="/sabia" className={classes.button}> Saiba Mais</a>
        </p>
        </div>
        
        
    <SwiperSabia/>
    
    </div>
      
    <div className={classes.blue}>
    <div className={classes.texto}><p> Suíte Tucano<br></br> <br></br>
        <span className={classes.description}>A suíte Tucano é uma acomodação no estilo rústico, que faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante. Está localizado no alto da montanha, com o privilégio de uma vista exuberante para o mar e algumas ilhas da região. Isolado do sistema urbano, em meio a natureza preservada do sul da Ilha de Florianópolis, o Aruna foi no passado um Eco Spa, após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span>
        
        <a href="/tucano" className={classes.button}> Saiba Mais</a>
        </p>
        
        
    </div>
    <SwiperTucano/>
   
    </div>
       
        
    

   
  

        
        <div className={classes.reserva}><p>Faça sua reserva  </p>
        
        <span className={classes.description}>
                Faça sua reserva entrando em contato conosco ou através de uma das empresas parceiras:

        </span>
            <div className={classes.brand}>
            <a href="https://api.whatsapp.com/send?phone=5548992061471" target="_blank" rel="noreferrer"><i class="icon2 fa-brands fa-whatsapp"></i></a>
        <a href="https://linktr.ee/arunafloripa" target="_blank" rel="noreferrer" ><i className="icon2 fa-brands fa-airbnb"></i></a>
        </div>
     
    
       </div>
        
        
   
    
    </>
    
    
    
    

  )
}

export default CardsQuartos

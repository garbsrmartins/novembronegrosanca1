import React from 'react'
import { makeStyles} from '@material-ui/core'

import './Cards.css'


const useStyles = makeStyles ((theme) => ({

cardsDiv: {

    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/4.webp'})` ,
    backgroundRepeat: 'no-repeat',
    
    backgroundSize: 'cover',
},

cardsDiv1: {

    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/21.webp'})` ,
    backgroundRepeat: 'no-repeat',
   
    backgroundSize: 'cover',
},
cardsDiv2: {

    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/tone1.webp'})` ,
    backgroundRepeat: 'no-repeat',
   
    backgroundSize: 'cover',
},

cards1: {

    width: '100%',

      
    
},

cards: {
    width: '100%',
    backgroundSize: 'cover',
    background: '#00000028 ',
    
    height:'100vh',

    "@media (max-width: 1280px)": {
        display: 'flex',
        flexDirection: 'column',
      },
    
   
    
},

texto: {

    
color: 'white',
fontFamily: 'Montserrat',
display: 'inline-block',
fontSize: '3em',
width: '100%',
textAlign: 'center',
verticalAlign: '-60vh',

"@media (max-width: 1280px)": {
    fontSize: '2em',
    float: 'none',
    justifyItems: 'center',
    margin: 'auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },


},






description: {
    
color: 'white',
fontFamily: 'Montserrat',
margin: '2em',
fontSize: '0.7em',

textAlign: 'center',
display: 'block',


},
button:{
    padding: '1em',
    background: 'rgba(255, 248, 248, 0.7) ',
    
    fontSize: '0.7em',
    borderRadius: '10px',
    color: 'black',
    textDecoration: 'none',

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
    color: 'gray',
}


}))

function Cards() {

    const classes = useStyles ();
  return (
    <>
  
    <div className={classes.cardsDiv}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Nossas Acomodações <br></br>
        <span className={classes.description}>Oferecemos dois espaços para reserva, a Aruna Casa Pirâmide e a Casa Refúgio Beija-Flor</span></p>
        <a className={classes.button} href='/quartos'> Conheça as casas </a> 
        </div>
        
    </div>
    </div>
    

    <div className={classes.cardsDiv2}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Faça sua reserva <br></br>
        <span className={classes.description}>Você pode fazer a reserva entrando em contato diretamente conosco ou pelas empresas parceiras</span></p>
        <div className={classes.brand}>
        <a href="https://api.whatsapp.com/send?phone=5548992061471" target="_blank" rel="noreferrer" ><i class="icon fa-brands fa-whatsapp"></i></a>
        <a href="https://linktr.ee/arunafloripa" target="_blank" rel="noreferrer" ><i className="icon fa-brands fa-airbnb"></i></a>
        </div>
        </div>
        
    </div>
    </div>
    </>
    
    
    
    

  )
}

export default Cards

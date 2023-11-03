import React from 'react'
import { makeStyles} from '@material-ui/core'

import './Cards.css'


const useStyles = makeStyles ((theme) => ({

cardsDiv: {

    color:'white',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/tone1.webp'})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    
    backgroundSize: 'cover',
    "@media (max-width: 1280px)": {
     
      float: 'none',
      justifyItems: 'center',
      
     
      display: 'block',
      flexDirection: 'column',
    },
},


cards: {

  background:'#00000070 ',
},
   
    


texto: {

  
  backgroundSize: 'cover',

marginTop: '100px',   

fontFamily: 'Montserrat',
display: 'inline-block',
fontSize: '2.5em',
width: '100%',
textAlign: 'center',
textDecoration: 'none',


"@media (max-width: 1280px)": {
    fontSize: '2em',
    float: 'none',
    justifyItems: 'center',
   
    display: 'flex',
    flexDirection: 'column',
  },


},






description: {
    

fontFamily: 'Montserrat',
margin: '4em 2em 2em 2em',
fontSize: '0.5em',
fontWeight: 'bold',

textAlign: 'center',
display: 'flex',
flexDirection: 'column',
textDecoration: 'none',
color: 'white',

"@media (max-width: 1280px)": {
    fontSize: '0.5em',
    float: 'none',
    justifyItems: 'center',
    margin: '50px auto',
   
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },

 

},

link: {


  textDecoration: 'none',
  color: 'white',
}



}))

function Cardscontato() {

    const classes = useStyles ();
  return (
    <>
    <div className={classes.cardsDiv}>
    <div className={classes.cards}>

        
        <div className={classes.texto}>
            <p>Endereço
                    <span className={classes.description}>
                                Estrada Francisco Thomaz dos Santos, 390<br></br>
                                Pântano do Sul, CEP 88067-700<br></br>
                                Florianópolis - Santa Catarina - Brasil
                                <br></br><br></br>
                                Telefone<br></br> <br></br>
                                Móvel e WhatsApp: <a className={classes.link} href="https://api.whatsapp.com/send?phone=5548992061471">+55 48 99206-1471</a>
                                <a href="https://api.whatsapp.com/send?phone=5548992061471" target="_blank" rel="noreferrer"><i class="topIconCon fa-brands fa-whatsapp"></i></a>
                    </span>
            </p>
            <p>
                Redes Sociais <br></br>
                
        <a href="https://www.instagram.com/arunaespacoregenerativo" target="_blank" rel="noreferrer" ><i className="topIconCon fa-brands fa-instagram"></i></a>
        <a href="https://linktr.ee/arunafloripa" target="_blank" rel="noreferrer" ><i className="topIconCon fa-brands fa-airbnb"></i></a>

            </p>
        </div>
        
    </div>
    </div>
   
    </>
    
    
    
    

  )
}

export default Cardscontato

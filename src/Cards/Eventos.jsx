import React from 'react'
import { makeStyles} from '@material-ui/core'
import leci from './Leci.png'




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
  backgroundSize:'cover',
  minHeight: '100vh'
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
  fontSize: '3em',
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
  fontSize: '1.5em',
  width: '50%',
  margin: 'auto',
  color: 'dark-gray',
  paddingBottom: '2em',

},
data: {

  fontFamily: 'Elephant V1',
  fontSize: '2em',
  width: '50%',
  margin: 'auto'

},

image: {


  margin: 'auto',
  alignItems: 'center',
  display: 'block',
  padding: '1em',
  maxWidth: '30%'
  

}



}))

function CardsQuartos() {

    const classes = useStyles ();
  return (
    <>
   <div className={classes.background}>
   <div className={classes.title2}> Programação</div>
    <p className={classes.data}>Dia 5</p> <br></br>
   <p className={classes.cards}>Show Leci Brandão e Rappin Hood<br></br>Prefeitura de São Carlos (CEMAC)<br></br> 20h às 22h<br></br> Av. Bruno Ruggiero  </p>
   <img src={leci} className={classes.image} alt='teste'/>
   
   <p className={classes.data}>Dia 8</p> <br></br>
   <p className={classes.cards}>Espetáculo de Dança - Iku - Núcleo Ajeum<br></br> 20h<br></br>  SESC, Teatro</p>  
   <p className={classes.cards}>Roda de Conversa  “Mulheres Pretas e Afroempreendedorismo: Protagonismo, participação social  e inovação para desenvolvimento local”.Abertura com Coral Soul Jazz <br></br> 19h30<br></br>  SENAC - Teatro</p>  
      
   
    
   
    
    </div>
       
        
    

   
  

        
        
     
    
    
        
        
   
    
    </>
    
    
    
    

  )
}

export default CardsQuartos

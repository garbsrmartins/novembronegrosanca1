import React from 'react'

import { makeStyles} from '@material-ui/core'
import separador from './Separador.png'
import ecofalante from './ecofalante3.png'




const useStyles = makeStyles((theme) => ({


  root:{

    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/texturapapel.png'})`,
    backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',

  },
  image: {


    margin: 'auto',
    alignItems: 'center',
    display: 'block',
    padding: '1em',
    width: '60%'
    
  
  },


  sobre: {
    
    
      fontSize: '1.6em',
      padding: '2em',
      textAlign: 'left',
      width: '70%',
      fontFamily:'Elephant V1, sans-serif',
      margin:'auto',
      
      "@media (max-width: 1300px)": {
        fontSize: '1em',
        width: '80%',
      

    },

    

  }


}))
export default function Prox() {
  const classes = useStyles();
  return (
    <div>
      <img src={separador} className={classes.image} alt="separador"/>
    <img src={ecofalante} alt='eco'/>
</div>

  )
}

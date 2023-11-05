import React from 'react'

import { makeStyles} from '@material-ui/core'
import separador from './Separador.png'




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
export default function Sobre() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={separador} className={classes.image} alt="separador"/>
      <p className={classes.sobre}>A “Agenda Unificada Novembro Negro - São Carlos é resultante de um mapeamento de atividades e ações que serão realizadas em novembro e estão voltadas para promoção da luta antirracista e para valorização da comunidade negra na nossa cidade.
<br></br><br></br>
É uma iniciativa conjunta e colaborativa de diversas instituições e da sociedade civil de São Carlos.
<br></br><br></br>
Compartilharemos aqui diversos eventos que integram a comemoração do mês da consciência negra.
<br></br><br></br>
Acompanhe, compartilhe e envie sugestões!
<br></br><br></br>
Vamos nos aquilombar São Carlos</p>
<img src={separador} className={classes.image} alt="separador"/>
</div>

  )
}

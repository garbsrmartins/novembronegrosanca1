import React from 'react'
import { makeStyles} from '@material-ui/core'
import './Header2.css'



const useStyles = makeStyles ((theme) => ({

    root: {
        
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/TemplateSlide_capa.jpg'})`,
      backgroundRepeat: 'no-repeat',
         
      backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        width: '100%',
        flexDirection: 'column',
      

        "@media (max-width: 900px)": {
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/capa.png'})`
          
        
  
      }
        
        
    },

       subtitle: {

      width: '100%',
      fontSize: '3em',
      textAlign: 'center',
      fontFamily:'Elephant V1, sans-serif',
      color: 'black',
      margin: '0',
      paddingTop: '1em',
      backgroundColor: 'white',
      backgroundColor: '#e7be1a',
      

      "@media (max-width: 900px)": {
        fontSize: '2em',
      

    },

    "@media (max-width: 500px)": {
      fontSize: '1.5em',
    

  },
  },

  subtitle1: {
    backgroundColor: '#e7be1a',
    width: '100%',
    fontSize: '2em',
    textAlign: 'center',
    fontFamily:'Elephant V1, sans-serif',
    color: 'black',
    margin: '0',
    paddingBottom: '1em',
   
   

    "@media (max-width: 900px)": {
      fontSize: '1.5em',
    

  },

  "@media (max-width: 500px)": {
    fontSize: '1.2em',
  

},
}
    

}))

function Header2() {
const classes = useStyles ();

  return (
    <div>
    <div className={classes.root}>
      <div className={classes.logoback}>
    
      </div>
      <p className={classes.subtitle}>Novembro Negro</p>
      <p className={classes.subtitle1}>Agenda unificada de São Carlos</p>
    
    </div>
    
   
    </div>
  )
}

export default Header2

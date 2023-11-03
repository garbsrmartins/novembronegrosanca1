import React from 'react'
import logo from '../images/LogoAruna3.png'
import { makeStyles} from '@material-ui/core'
import './Header2.css'



const useStyles = makeStyles ((theme) => ({

    root: {

      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Mar.jpeg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        flexDirection: 'column'
        
        
    },

       subtitle: {

      width: '100%',
      fontSize: '3em',
      textAlign: 'center',
      fontFamily:'Montserrat',
      color: 'black',

      "@media (max-width: 900px)": {
        fontSize: '2em',
      

    },

    "@media (max-width: 500px)": {
      fontSize: '1.5em',
    

  },
  }
    

}))

function Header2() {
const classes = useStyles ();

  return (
    <div>
    <div className={classes.root}>
      <div className={classes.logoback}>
      <img className='imgHeader' src={logo} alt="texto"/>
      </div>
      <p className={classes.subtitle}>Espaço Regenerativo</p>
    
    </div>
    
   
    </div>
  )
}

export default Header2

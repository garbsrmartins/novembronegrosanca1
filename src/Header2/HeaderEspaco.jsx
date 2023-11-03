import React from 'react'

import { makeStyles} from '@material-ui/core'
import './Header2.css'


const useStyles = makeStyles ((theme) => ({

    root: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        flexDirection: 'column',
        
        
        
    },

       subtitle: {

      width: '70%',
      fontSize: '2em',
      textAlign: 'center',
      fontFamily:'Montserrat',
      

    },

    title: {
      width: '100%',
      fontSize: '4em',
      textAlign: 'center',
      fontFamily:'Montserrat',

    },

    

}))

function HeaderEspaco() {
const classes = useStyles ();

  return (
    <div>
    <div className={classes.root}>
      <div className={classes.title}>
      O Espaço
      </div>
      <p className={classes.subtitle}> Aruna possui diversos locais internos nos arredores, que proporcionam contato com a natureza e uma diversidade de sentimentos </p>
    
    </div>
    
   
    </div>
  )
}

export default HeaderEspaco

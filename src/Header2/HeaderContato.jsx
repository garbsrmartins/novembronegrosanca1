import React from 'react'

import { makeStyles} from '@material-ui/core'




const useStyles = makeStyles ((theme) => ({

    

  root: {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    flexDirection: 'column'
    
    
},

title: {
  color: 'white',

  width: '80%',
  fontSize: '3em',
  textAlign: 'center',
  fontFamily:'Montserrat',
  marginTop: '200px',
  "@media (max-width: 1280px)":{
    fontSize: '2.1em',
  },

},



}))

function HeaderContato() {
const classes = useStyles ();

  return (
    <>
   
    <div className={classes.root}>
      
    <div className={classes.title}>
     
   <div>Contato</div>
    
    </div>
    
   
    </div>
    </>
  )
}

export default HeaderContato

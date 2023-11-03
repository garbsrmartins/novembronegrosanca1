import React from 'react'

import { makeStyles} from '@material-ui/core'




const useStyles = makeStyles ((theme) => ({

    

  root: {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    flexDirection: 'column'
    
    
},

title: {

  width: '80%',
  fontSize: '3em',
  textAlign: 'center',
  fontFamily:'Montserrat',
  color: 'black',
  "@media (max-width: 1280px)":{
    fontSize: '2.1em',
  },

},



}))

function HeaderSabia() {
const classes = useStyles ();

  return (
    <>
   
    <div className={classes.root}>
      
    <div className={classes.title}>
     
   
    
    </div>
    
   
    </div>
    </>
  )
}

export default HeaderSabia

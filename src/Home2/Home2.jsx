import React from 'react'
import {CssBaseline, makeStyles} from '@material-ui/core'
import Header2 from '../Header2/Header2';

import Footer from '../Footer/Footer';



const useStyles = makeStyles((theme) => ({

    root: {
      
        

    }


}))

function Home2() {

    const classes = useStyles();
  return (
    <div className={classes.root}>
     
      <CssBaseline/>
      <Header2/>
      
     
      <Footer/>
    </div>
  )
}

export default Home2

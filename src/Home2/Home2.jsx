import React from 'react'
import {CssBaseline, makeStyles} from '@material-ui/core'
import Header2 from '../Header2/Header2';

import Footer from '../Footer/Footer';
import Sobre from '../Cards/Sobre';




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
     
      <Sobre/>
      <Footer/>
    </div>
  )
}

export default Home2

import React from 'react'
import Cardscontato from '../Cards/CardsContato'
import Footer from '../Footer/Footer'
import HeaderContato from '../Header2/HeaderContato'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles ((theme) => ({

root: {backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/tone1.webp'})`,
backgroundAttachment: 'fixed',
backgroundRepeat: 'no-repeat',

backgroundSize: 'cover',
},
cards: {

  background:'#00000070 ',
},
}))

function Contato() {

  const classes = useStyles ();
  return (
    <>
    <div className={classes.root}>
    <div className={classes.cards}>
    <HeaderContato/>
    <Cardscontato/>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default Contato

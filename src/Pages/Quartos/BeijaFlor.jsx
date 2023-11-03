import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'


import Headerbeija from '../../Header2/HeaderBeija'
import Cardsbeija from '../../Cards/Cardsbeija'





const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
    backgroundColor: '#E5FBFF',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    },

   
    


    
    
},

oppacity: {
        
  background:'#ffffff80'
}


}))


function Piramide() {
  
  const classes = useStyles ();
  return (

       
      
  
    <div className={classes.root}>
   <div className={classes.oppacity}>

<Headerbeija/>


<Cardsbeija/>

  
   <Footer/>
    </div> 
    </div>
   
  )
}

export default Piramide

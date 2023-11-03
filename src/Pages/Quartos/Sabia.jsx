import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'
import HeaderSabia from '../../Header2/HeaderSabia';
import CardsSabia from '../../Cards/CardsSabia';






const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
   backgroundColor: '#FFE9A9',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    }
    


    
    
},
oppacity: {
        
  background:'#ffffff99'
}

}))

function Sabia() {
  
  const classes = useStyles ();
  return (

       
 
  
    <div className={classes.root}>
   <div className={classes.oppacity}>
 
<HeaderSabia/>
<CardsSabia/>
  
   <Footer/>
    </div> 
    </div>
   
   
  )
}

export default Sabia

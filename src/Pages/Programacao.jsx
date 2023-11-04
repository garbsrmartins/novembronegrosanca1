import './Quartos.css'
import { makeStyles} from '@material-ui/core'





import Eventos from '../Cards/Eventos';





const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
   backgroundColor: '#E5FBFF',
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

function Quartos() {
  
  const classes = useStyles ();
  return (

       
 
  
    <div className={classes.root}>
   <div className={classes.oppacity}>
 

    
    <Eventos/>
    
   
    </div> 
    </div>
   
   
  )
}

export default Quartos

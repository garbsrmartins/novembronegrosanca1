import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'


import HeaderTucano from '../../Header2/HeaderTucano';
import CardsTucano from '../../Cards/CardsTucano';






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

function Tucano() {
  
  const classes = useStyles ();
  return (

       
 
  
    <div className={classes.root}>
   <div className={classes.oppacity}>
 
<HeaderTucano/>
<CardsTucano/>
  
   <Footer/>
    </div> 
    </div>
   
   
  )
}

export default Tucano

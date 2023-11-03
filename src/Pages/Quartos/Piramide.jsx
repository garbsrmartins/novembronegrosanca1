import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'
import HeaderPiramide from '../../Header2/HeaderPiramide'


import CardsPiramide from '../../Cards/CardsPiramide'




const useStyles = makeStyles ((theme) => ({

    

  root: {
    
   backgroundColor: '#FFE9A9',
    
   
    
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    }
    


    
    
},
oppacity: {
        
  background:'#ffffff99'
}

}))

function Piramide() {
  
  const classes = useStyles ();
  return (

       
 
  
    <div className={classes.root}>
   <div className={classes.oppacity}>
 
<HeaderPiramide/>

<CardsPiramide/>

  
   <Footer/>
    </div> 
    </div>
   
   
  )
}

export default Piramide

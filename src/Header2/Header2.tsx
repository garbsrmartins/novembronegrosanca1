import { makeStyles } from '@material-ui/core';
import './Header2.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/TemplateSlide_capa.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40rem',
    width: '100%',
    flexDirection: 'column',

    "@media (max-width: 900px)": {
      height: '20rem',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/capa.png'})`
    }
  },

  logoback: {
    // Define your styles for logoback here
    width: '100px', // Example width
    height: '100px', // Example height
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/logo.png'})`, // Replace with your logo image
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    marginBottom: '1em', // Example margin
  },

  subtitle: {

    fontSize: '3em',
    textAlign: 'center',
    fontFamily: 'Elephant V1, sans-serif',
    color: 'black',
    margin: '0',
    paddingTop: '1em',


    "@media (max-width: 900px)": {
      fontSize: '2em',
    },

    "@media (max-width: 500px)": {
      fontSize: '1.5em',
    },
  },

  subtitle1: {

    fontSize: '2em',
    textAlign: 'center',
    fontFamily: 'Elephant V1, sans-serif',
    color: 'black',
    margin: '0',
    paddingBottom: '1em',

    "@media (max-width: 900px)": {
      fontSize: '1.5em',
    },

    "@media (max-width: 500px)": {
      fontSize: '1.2em',
    },
  },
  titleContainer: {
    padding: '1rem',
    width: 'auto',
    background: '#e7be1a',
  }
}));

function Header2() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.logoback}>
          {/* You can add any additional content for the logo here */}
        </div>
        <div className={classes.titleContainer}>
          <p className={classes.subtitle}>NOVEMBRO NEGRO</p>
          <p className={classes.subtitle1}>Agenda unificada de São Carlos</p>

        </div>
      </div>
    </div>
  )
}

export default Header2;

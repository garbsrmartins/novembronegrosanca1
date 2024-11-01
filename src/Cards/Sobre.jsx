import { Button, makeStyles, Typography } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Card } from '@mui/material';
import separador from './Separador.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/texturapapel.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    margin: 'auto',
    alignItems: 'center',
    display: 'block',
    padding: '1em',
    width: '60%',
  },
  descricao: {
    width: '50%',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  sobre: {
    fontSize: '1.6em',
    padding: '2em',
    textAlign: 'center',
    width: '70%',
    fontWeight: 'bold',
    margin: 'auto',
    "@media (max-width: 1300px)": {
      fontSize: '1em',
      width: '80%',
    },
  },
  buttonContainer: {
    width: '100%',
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem', // Espaçamento entre os botões
    "@media (max-width: 900px)": {
      flexDirection: 'column',
    },
  },
}));

export default function Sobre() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={separador} className={classes.image} alt="separador" />
      <div className={classes.sobre}>
        <Typography variant='h3'>Agenda Unificada Novembro Negro</Typography>
        <Typography variant='h5'>São Carlos - SP</Typography>
        <br />
        <Typography variant='h5'>
          A “Agenda Unificada Novembro Negro - São Carlos" é resultante de um mapeamento de atividades e ações que serão realizadas em novembro e estão voltadas para promoção da luta antirracista e para valorização da comunidade negra na nossa cidade.
          É uma iniciativa conjunta e colaborativa de diversas instituições e da sociedade civil de São Carlos.
          Compartilharemos aqui diversos eventos que integram a comemoração do mês da consciência negra.
          Acompanhe, compartilhe e envie sugestões!
        </Typography>
        <br />
        <Typography variant='h5'>Vamos nos aquilombar São Carlos!</Typography>
        <br />
        <Typography variant='h5'>Contatos</Typography>

        {/* Container dos botões */}
        <div className={classes.buttonContainer}>
          <Button
            variant='contained'
            color='primary'
            href="mailto:novembronegrosaocarlos@gmail.com"
          >
            <EmailIcon />
            <Typography variant='body1' style={{ marginLeft: '0.5rem' }}>
              Email
            </Typography>
          </Button>

          <Button
            variant='contained'
            color='secondary'
            href="https://forms.gle/2MFFpzD7SX2Vqh9S9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InsertDriveFileIcon />
            <Typography variant='body1' style={{ marginLeft: '0.5rem' }}>
              Formulário de inscrição de eventos
            </Typography>
          </Button>
        </div>
      </div>
      <img src={separador} className={classes.image} alt="separador" />
    </Card>
  );
}

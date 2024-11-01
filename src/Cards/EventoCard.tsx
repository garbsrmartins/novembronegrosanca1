import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Card, CardContent, Chip, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { EventoInterface } from '../constants';


const useStyles = makeStyles({
  card: {
    width: '100%',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '1rem',
    transition: 'background-color 0.3s ease',

  },
  media: {
    height: 200,
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  data: {
    fontFamily: "Roboto",
    fontSize: '1rem'
  },
  titulo: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#5c2323',
    letterSpacing: '2px',
    textAlign: 'left',
    marginBottom: '.5rem'

  },
  info: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '.5rem 0',
    gap: '16px',
    flexWrap: 'wrap'
  },
  content: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'center',
  },
  expandButton: {
    all: 'unset',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#1e4722',
    border: 'none',
  },
  label: {
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    color: '#1976d2',
  },
  description: {
    textAlign: 'justify',
    fontFamily: 'Roboto, sans-serif',
    marginTop: '.5rem'
  },
  publico: {
    textAlign: 'left',
    fontFamily: 'Roboto, sans-serif',
    marginTop: '.5rem'
  }
});

interface EventoCardProps {
  evento: EventoInterface;
}

const EventoCard: React.FC<EventoCardProps> = ({ evento }) => {
  const classes = useStyles();




  // Formatando a data e o horário
  const formatarData = (data: Date) => data.toLocaleDateString('pt-BR');
  const formatarHorario = (data: Date) => data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>

        <Typography variant='h5' align='left'  >{evento.titulo.toUpperCase()}</Typography>
        <div className={classes.info}>
          <Chip color='success' variant='outlined' icon={<CalendarMonthIcon />} label={formatarData(evento.data)} />
          <Chip color='success' variant='outlined' icon={<ScheduleIcon />} label={formatarHorario(evento.data)} />
          <Typography variant='h6'>Duração: {evento.duracao}</Typography>
          <Typography variant='h6' align='left'>
            Local: <a href={evento.local.link} className={classes.link} target="_blank" rel="noopener noreferrer">
              {evento.local.name}
            </a>
          </Typography>
        </div>

        <Divider orientation="horizontal" />
        <Typography variant="h6">Descrição</Typography>
        <span className={classes.description}>
          {evento.descricao}
        </span>
        <Typography variant="h6">Publico alvo</Typography>
        <span className={classes.description}>
          {evento.publico}
        </span>


      </CardContent>

    </Card>
  );
}

export default EventoCard;

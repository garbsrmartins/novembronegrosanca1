import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import EventoCard from '../Cards/EventoCard';
import { EventoInterface, EVENTOS_CONSTANTS } from '../constants';
import Header2 from '../Header2/Header2';

// Defina os estilos
const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    background: '#d8c9af',
  },
  opacity: {
    opacity: 0.95,
  },
  eventoPage: {
    width: '100%',
    padding: '20px',
  },
  eventHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
});

const Programacao: React.FC = () => {
  const classes = useStyles();
  const eventos: EventoInterface[] = EVENTOS_CONSTANTS;

  const handleShare = () => {
    const message = 'Confira a programação de eventos!';
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={classes.root}>
      <Header2 />
      <div className={classes.opacity}>
        <div className={classes.eventoPage}>
          <div className={classes.eventHeader}>
            <Chip onClick={handleShare} color="success" label="Compartilhar no WhatsApp" icon={<WhatsAppIcon />} />
          </div>

          {eventos.map((evento) => (
            <EventoCard key={evento.key.toString()} evento={evento} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programacao;


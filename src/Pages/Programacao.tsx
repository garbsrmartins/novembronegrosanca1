// Programacao.tsx
import { FormControl, InputLabel, makeStyles, MenuItem, Select, Typography } from '@material-ui/core';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Chip } from '@mui/material';
import { addDays, isBefore, isSameDay } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EventoCard from '../Cards/EventoCard';
import { EventoInterface, EVENTOS_CONSTANTS } from '../constants'; // Importando eventos diretamente
import Header2 from '../Header2/Header2';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    background: '#d8c9af',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  opacity: {
    padding: '16px',
  },
  eventoPage: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  message: {
    background: '#fff',
    padding: '2rem .5rem',
    textAlign: 'center',
    marginTop: '20px',
    color: '#461d1d',
  },
  eventHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    width: '100%',
    boxSizing: 'border-box',
    padding: '.5rem',
    flexWrap: 'wrap',
  },
  verProgramacaoBtn: {
    all: 'unset',
    cursor: 'pointer',
    fontFamily: 'roboto',
    border: 'solid 1px #efefe',
    borderRadius: '10px',
    padding: '.2rem 1rem',
    marginTop: '1rem',
    backgroundColor: '#3da53d',
    color: '#f2f5f2',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#2e7c2e',
      color: '#ffffff',
    },
  }
});

const Programacao: React.FC = () => {
  const classes = useStyles();
  const { filtro } = useParams<{ filtro?: string }>();
  const navigate = useNavigate();
  const eventos = EVENTOS_CONSTANTS;
  console.log('EVENTOS_2', filtro)

  const [filteredEvents, setFilteredEvents] = useState<EventoInterface[]>(eventos);
  const [selectedFilter, setSelectedFilter] = useState<string>(filtro || '15dias');

  console.log(selectedFilter, 'filtros');

  const filtrarEventos = useCallback(() => {
    const hoje = new Date();
    let eventosFiltrados = [...eventos];

    switch (selectedFilter) {
      case 'hoje':
        eventosFiltrados = eventosFiltrados.filter((evento) =>
          isSameDay(evento.data, hoje)
        );
        break;
      case '7dias':
        eventosFiltrados = eventosFiltrados.filter((evento) =>
          isBefore(evento.data, addDays(hoje, 7))
        );
        break;
      case '15dias':
        eventosFiltrados = eventosFiltrados.filter((evento) =>
          isBefore(evento.data, addDays(hoje, 15))
        );
        break;
      default:
        eventosFiltrados = eventos;
        break;
    }

    eventosFiltrados.sort((a, b) => a.data.getTime() - b.data.getTime());
    console.log(eventosFiltrados)
    setFilteredEvents(eventosFiltrados);
  }, [eventos, selectedFilter]);

  useEffect(() => {
    filtrarEventos();
  }, [filtrarEventos]);

  const handleFilterChange = (filtro: string) => {
    setSelectedFilter(filtro);
    navigate(`/programacao/${filtro}`);
  };

  const handleShare = () => {
    const whatsappUrl = `https://wa.me/?text=Confira as novidades da Agenda Unificada do Novembro Negro Sanca: ${encodeURIComponent(window.location.href)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={classes.root}>
      <Header2 />
      <div className={classes.opacity}>
        <div className={classes.eventoPage}>
          <div className={classes.eventHeader}>
            <FormControl>
              <InputLabel variant="standard">
                Exibir
              </InputLabel>
              <Select variant='standard'
                value={selectedFilter}
                onChange={(e) => handleFilterChange(e.target.value as string)}
                displayEmpty
              >
                <MenuItem value="todos">Programação Completa</MenuItem>
                <MenuItem value="15dias">Próximos 15 Dias</MenuItem>
                <MenuItem value="7dias">Próximos 7 Dias</MenuItem>
                <MenuItem value="hoje">Hoje</MenuItem>
              </Select>
            </FormControl>

            <Chip onClick={handleShare} color='success' label="Compartilhar no WhatsApp" icon={<WhatsAppIcon />} />
          </div>

          {/* Verificação de Eventos Filtrados */}
          {filteredEvents.length === 0 ? (
            <div className={classes.message}>
              <Typography variant="h6">Não foi encontrado nenhum evento para a pesquisa selecionada.</Typography>
              <button className={classes.verProgramacaoBtn} onClick={() => handleFilterChange('todos')} >
                Ver Programação Completa
              </button>
            </div>
          ) : (
            // Lista de Eventos
            filteredEvents.map((evento) => (
              <EventoCard key={evento.key.toString()} evento={evento} />
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Programacao;

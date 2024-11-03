import React, { useCallback, useEffect, useState } from 'react';
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Chip
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { makeStyles } from '@mui/styles';
import EventoCard from '../Cards/EventoCard';
import Header2 from '../Header2/Header2';
import { addDays, isBefore, isSameDay } from 'date-fns';
import { EventoInterface, EVENTOS_CONSTANTS } from '../constants';

// Defina a interface do evento
const eventoConstants = EVENTOS_CONSTANTS;

// Função para buscar eventos (simulando chamada de API)
const fetchEventos = async (): Promise<EventoInterface[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventoConstants);
    }, 2000); // Simula atraso de 2 segundos
  });
};

// Defina os estilos
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  opacity: {
    opacity: 0.95,
  },
  eventoPage: {
    maxWidth: 800,
    width: '100%',
    padding: '20px',
  },
  eventHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
  },
  verProgramacaoBtn: {
    marginTop: '10px',
  },
});

// Componente principal
const Programacao: React.FC = () => {
  const classes = useStyles();
  const { filtro } = useParams<{ filtro?: string }>();
  const navigate = useNavigate();

  // Estado para eventos e carregamento
  const [eventos, setEventos] = useState<EventoInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState<EventoInterface[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>(filtro || '15dias');

  // Função assíncrona para carregar eventos
  const carregarEventos = async () => {
    setLoading(true);
    try {
      const data = await fetchEventos(); // Substitua por chamada real à API
      setEventos(data);
    } finally {
      setLoading(false);
    }
  };

  // Função de filtragem
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
    setFilteredEvents(eventosFiltrados);
  }, [eventos, selectedFilter]);

  // Carregar eventos ao montar o componente
  useEffect(() => {
    carregarEventos();
  }, []);

  // Refilar eventos quando os eventos ou o filtro mudam
  useEffect(() => {
    if (!loading) {
      filtrarEventos();
    }
  }, [filtrarEventos, loading]);

  // Lidar com a mudança de filtro
  const handleFilterChange = (filtro: string) => {
    setSelectedFilter(filtro);
    navigate(`/programacao/${filtro}`);
  };

  // Função para compartilhar no WhatsApp (exemplo simples)
  const handleShare = () => {
    const message = 'Confira a programação de eventos!';
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Renderizar componente
  return (
    <div className={classes.root}>
      <Header2 />
      <div className={classes.opacity}>
        <div className={classes.eventoPage}>
          {/* Exibe carregamento enquanto os eventos estão sendo carregados */}
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <div className={classes.eventHeader}>
                <FormControl>
                  <InputLabel variant="standard">Exibir</InputLabel>
                  <Select
                    variant='standard'
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

              {/* Renderiza a lista de eventos ou mensagem se vazia */}
              {filteredEvents.length === 0 ? (
                <div className={classes.message}>
                  <Typography variant="h6">Não foi encontrado nenhum evento para a pesquisa selecionada.</Typography>
                  <button className={classes.verProgramacaoBtn} onClick={() => handleFilterChange('todos')} >
                    Ver Programação Completa
                  </button>
                </div>
              ) : (
                filteredEvents.map((evento) => (
                  <EventoCard key={evento.key.toString()} evento={evento} />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programacao;

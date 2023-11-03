import React from 'react'
import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles ((theme) => ({

sobre: {


    fontFamily:'Montserrat',
    textAlign: 'center',
    margin: 'auto 10%',
    fontSize: '1.5em',  
    color: 'black'
},

filter: {

    background: 'rgba(255, 248, 248, 0.5) ',
    width: '100%',
    padding: '3em 0'

}
}))

function Sobre() {

    const classes = useStyles ();
  return (
<div className={classes.filter}>
    <div className={classes.sobre}>
        <h2> Sobre o Espaço</h2>
        Um refúgio aconchegante no alto da montanha, com vista para o mar e ilhas com alcance de até 100 km. Isolado do sistema urbano, em meio a exuberante natureza do sul da Ilha de Florianópolis. Cabanas rústicas suspensas sobre as copas das árvores vivenciando a musicalidade e vizinhança dos animais silvestres.<br></br><br></br>

Dedicado às pessoas que buscam relaxamento e paz de espírito. O Aruna é a evolução de um espaço que outrora funcionava como um Spa de Terapias Naturais, que se chamava Aruna Health Spa. O significado de Aruna vem da mitologia oriental, "Arjuna - o cocheiro de Surya o Deus Sol". Traduzindo para o ocidental "O veículo que conduz a essência". Este era o embasamento dos serviços aqui prestados e que tornou-se conceito estabelecido.<br></br><br></br>

Devido à grande procura para estadia em Aruna transformamos a estrutura em uma pequena hospedaria que oferece alguns dos serviços do Spa, exclusivo para hóspedes, por isso mantemos o termo Spa em nosso nome.<br></br><br></br>

Tencionamos manter a estrutura com poucas unidades para melhor dedicação aos hóspedes. Pois acreditamos que o maior crescimento está na interagência respeitosa com a essência. Humana e ecológica.<br></br>
    </div>
    </div>
  )
}

export default Sobre

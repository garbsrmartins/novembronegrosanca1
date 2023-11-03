import React from 'react'
import { makeStyles} from '@material-ui/core'



import './Cards.css'

import SwiperPiramide from '../Swiper/ImagesPiramide/Swiper';




const useStyles = makeStyles ((theme) => ({





texto: {

    

fontFamily: 'Montserrat',
display: 'flex',
fontSize: '1.8em',
width: '80%',
textAlign: 'center',
fontWeight: 'bold',

margin: 'auto',

"@media (max-width: 1280px)": {
    fontSize: '1.5em',
    float: 'none',
    justifyItems: 'center',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },


},






description: {
    

fontFamily: 'Montserrat',
padding: '1em',
fontSize: '0.7em',

textAlign: 'left',
display: 'flex',



},

reserva: {
    fontFamily: 'Montserrat',

fontSize: '2.2em',
width: '70%',
textAlign: 'center',
fontWeight: 'bold',

margin: 'auto',

"@media (max-width: 1280px)": {
    fontSize: '2em',
    float: 'none',
    justifyItems: 'center',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },


},

brand: {

    display: 'inline-block',
    textAlign: 'center',
    fontSize: '2em',
    margin: '10px 10px 50px 10px',
    color: 'black',
},

title2: {

  paddingTop: '60px',
  textAlign:'center',
  fontSize: '3em',

  "@media (max-width: 1280px)": {
    fontSize: '2em',
    paddingTop: '60px',
   
  },
}


}))

function CardsPiramide() {

    const classes = useStyles ();
  return (
   
   <>
    
   <div className={classes.title2}> Aruna Casa Pirâmide</div>
        <div className={classes.texto}><p>
        <span className={classes.description}>A Aruna Casa Pirâmide faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante. Está localizado no alto da montanha, com o privilégio de uma vista exuberante para o mar e algumas ilhas da região. Isolado do sistema urbano, em meio a natureza preservada do sul da Ilha de Florianópolis, o Aruna foi no passado um Eco Spa, após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span></p>
        
        
    </div>
   <SwiperPiramide/>
   

        
        <div className={classes.texto}><p> O espaço
        <span className={classes.description}>A Aruna Casa Pirâmide foi reconstruída recentemente, é muito bem ventilada e iluminada, possui dois quartos, sendo um para casal, onde há uma varanda com vista para o mar e o outro solteiro com bicama, uma bela sala, cozinha equipada para o preparo das suas refeições,
         banheiro e um espaço de lavanderia. Nossa água vem da nascente, 
         estamos rodeados pela floresta preservada e praticamente sem vizinhos próximos.<br></br><br></br>

         O Aruna possui alguns espaços comuns: espaço para fogueira, uma pequena piscina com água da nascente,
          um mirante com uma vista espetacular, um lago e um local para refeições ao ar livre <br></br><br></br>

          Temos uma sala, na parte superior da Pirâmide, onde praticamos meditação e yoga. O uso desta sala é exclusivo,
           mas haverá a possibilidade de abrirmos para os hóspedes que sinalizarem desejo de participar das práticas.<br></br><br></br>

           Eventualmente podemos oferecer uma “supresa”, um pequeno cardápio de algumas iguarias, muito especiais aqui da ilha,
            como ostras gratinadas, mariscos com preparos especiais ou pizzas. <br></br><br></br>
            
            Dedicado as pessoas que buscam relaxamento e paz de espírito,
             o Aruna é a evolução de um espaço que outrora funcionava como um Spa de Terapias Naturais.
             O significado de Aruna vem da mitologia oriental "Arjuna", que sua tradução para o ocidental é "O buscador da verdade".</span></p>
        
        </div>

   

        
        <div className={classes.texto}><p>Acesso do hóspede
        <span className={classes.description}>
        Os hóspedes terão acesso a piscina (nos horários permitidos), área para fogueira e churrasqueira
        (mediante agendamento), lago e jardins livres. <br></br><br></br>
        Há um mirante com vista para o mar e às praias dos Açores, Pântano do Sul e Solidão, 
        local ideal para tomar um café da manhã ou contemplar a maravilhosa vista do mar e natureza local.


        </span></p>
        </div>
         
        
        
   
    

        
        <div className={classes.texto}><p>Outras observações
        <span className={classes.description}>
        Nas proximidades existe uma variedade de restaurantes, belíssimas praias, 
        ilhas, trilhas e cachoeiras com piscina natural. Passeios exclusivos com o nosso carro Hilux 4x4 é possível. <br></br><br></br>
        Temos uma sala com 45 metros quadrados, dentro de uma pirâmide, onde praticamos diariamente meditação e yoga. 
        Os hóspedes poderão se integrar em algumas práticas abertas, desde que agendadas com antecedência. <br></br><br></br>
        A água que abastece todas as casas, provém de nascente natural. <br></br><br></br>
        Temos dois cachorros de porte médio, super dóceis e acostumados ao convívio dos hóspedes e amigos.
        </span></p>
       
        </div>
        
    

   
  

        
        <div className={classes.reserva}><p>Faça sua reserva  </p>
        
        <span className={classes.description}>
                Faça sua reserva entrando em contato conosco ou através de uma das empresas parceiras:

        </span>
            <div className={classes.brand}>
            <a href="https://api.whatsapp.com/send?phone=5548992061471" target="_blank" rel="noreferrer"><i class="icon2 fa-brands fa-whatsapp"></i></a>
        <a href="https://www.airbnb.com.br/rooms/719701246553407526?_set_bev_on_new_domain=1669982735_NTEwOTc0OWRmMDk1&source_impression_id=p3_1669982490_LrGOU1d3jaYZFTYN" target="_blank" rel="noreferrer" ><i className="icon2 fa-brands fa-airbnb"></i></a>
        </div>
     
    
       </div>
        
        
   
    
    
    
    </>
    
    

  )
}

export default CardsPiramide

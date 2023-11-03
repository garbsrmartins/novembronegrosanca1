import React from 'react'
import ProductImages from '../components'

import { sliderImagesSabia} from './indexsabia'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function SwiperSabia() {
  return (
    <div style={{
        height: '90vh',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5em',

    }}>
      <div style={{
        width: '80vw',
        height: '100vh',
        
        padding: '20px',

       


      }}>

        <ProductImages images={sliderImagesSabia}/>
      </div>
    </div>
  )
}

export default SwiperSabia
import React from 'react'
import ProductImages from '../components'

import { sliderImagesTucano} from './indextucano'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function SwiperTucano() {
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

        <ProductImages images={sliderImagesTucano}/>
      </div>
    </div>
  )
}

export default SwiperTucano
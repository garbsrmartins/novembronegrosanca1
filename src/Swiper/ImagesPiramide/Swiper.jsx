import React from 'react'
import ProductImages from '../components'

import { sliderPiramide } from './indexPiramide'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function SwiperPiramide() {
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

        <ProductImages images={sliderPiramide}/>
      </div>
    </div>
  )
}

export default SwiperPiramide

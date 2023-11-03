import React, { useState } from 'react'

import PropTypes from 'prop-types'
import './sliderimages.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'


const ProductImages = props => {

    const [activeThumb, setActiveThumb] = useState ();

  return <>
        <Swiper
        
            loop = {true}
            spaceBetween = {10}
            navigation = {true}
            modules ={[Navigation, Thumbs]}
            grabCursor = {true}
            thumbs={{swiper:activeThumb}}
            className = 'sliderimage'
        >
            {
            
            props.images.map((item, index) => 
            
                <SwiperSlide key={index}>
                    <img  src={item } alt='sliderimage'/>
                </SwiperSlide>
            
            )
            
            
            }


        </Swiper>
        <Swiper
        onSwiper={setActiveThumb}
        loop = {true}
        spaceBetween = {10}
        slidesPerView={5}
        modules ={[Navigation, Thumbs]}
       
        className = 'sliderimage-thumb'
    >
        {
        
        props.images.map((item, index) => 
        
            <SwiperSlide key={index}>
                <div className='sliderimage-thumb-wrapper'>
                <img  src={item } alt='sliderimage'/>
                </div>
            </SwiperSlide>
        
        )
        
        
        }


    </Swiper>
        
  
  </>
}

ProductImages.propTypes = {

    images: PropTypes.array.isRequired
}

export default ProductImages

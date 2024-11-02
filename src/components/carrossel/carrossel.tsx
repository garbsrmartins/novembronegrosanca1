import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export interface CarouselImage {
    src: string;
    title: string;
}

interface CarouselProps {
    images: CarouselImage[];
}

const useStyles = makeStyles({
    slickArrow: {
        '&:before': {
            color: 'black',
        },
    },
    box: {
        padding: '1rem',
        backgroundColor: '#e7be1a'
    }
});

const Carrossel: React.FC<CarouselProps> = ({ images }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <div className={classes.slickArrow} />,
        nextArrow: <div className={classes.slickArrow} />,
    };

    return (
        <Box className={classes.box} sx={{ maxWidth: '100%', mx: 'auto', p: 2 }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <Box key={index} sx={{ px: 1 }}>
                        <Box
                            component="img"
                            src={image.src}
                            alt={image.title}
                            sx={{
                                width: '100%',
                                height: 500,
                                objectFit: 'contain',
                            }}
                        />
                        <Typography variant="h6" align="center" fontWeight='bold' sx={{ mt: 1 }}>
                            {image.title}
                        </Typography>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Carrossel;

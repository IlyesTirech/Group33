import React from 'react'
import Slider from "react-slick"
const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    
    className: "slides"
    
  }
  const photos = [
    {
      name: 'photo1',
      url: 'https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?cs=srgb&dl=pexels-christina-morillo-1181438.jpg&fm=jpg'   
    },
    {
      name: 'photo2',
      url: 'https://images.pexels.com/photos/1963622/pexels-photo-1963622.jpeg?cs=srgb&dl=pexels-athena-1963622.jpg&fm=jpg'   
    },
    {
      name: 'photo3',
      url: 'https://images.pexels.com/photos/1927320/pexels-photo-1927320.jpeg?cs=srgb&dl=pexels-elina-sazonova-1927320.jpg&fm=jpg'   
    }
  ]
const SliderCom = () => {

    return(
<Slider {...settings} >
{photos.map((photo) =>{
return(
  <div className = 'slider_img'>
    <img width="100%" height='850vh' src={photo.url}/>
  </div>
)
})}
     </Slider>
    )
}

export default SliderCom;
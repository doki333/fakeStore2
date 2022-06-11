import Slider from 'react-slick'
import { useRecoilValue } from 'recoil'
import { selectedModalItem } from 'recoil/cart.atom'

import styles from './imageSlider.module.scss'

const sliderSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const ImageSlider = () => {
  const selectedItem = useRecoilValue(selectedModalItem)

  return (
    <Slider {...sliderSetting} className={styles.carouselWrapper}>
      {selectedItem &&
        selectedItem.images.map((picture, index) => {
          const keyIdx = `picture-${index}`
          return (
            <div key={keyIdx} className={styles.carouselInner}>
              <img src={picture} alt='item' />
            </div>
          )
        })}
    </Slider>
  )
}

export default ImageSlider

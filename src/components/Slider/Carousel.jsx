import Slider from "react-slick";
import PropTypes from 'prop-types';
import './Carousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleReview from "../Review/SingleReview";

const Carousel = ({ data }) => {
  const { useFor, informations, sliderSetting, sliderImages } = data;

  if (useFor === "review") {
    return (
      <Slider  {...sliderSetting}>
        {
          informations.map((element, index) => (
            <SingleReview element={element} key={index} />
          ))
        }
      </Slider >
    )
  } else if (useFor === "image-slider") {
    return (
      <Slider {...sliderSetting}>
        {
          sliderImages.map((item, index) => (
            <img src={item.imgLink} key={index} alt="" />
          ))
        }
      </Slider>
    )
  }

  return null;
}

Carousel.propTypes = {
  data: PropTypes.shape({
    useFor: PropTypes.string,
    informations: PropTypes.array,
    sliderSetting: PropTypes.object,
    sliderImages: PropTypes.array
  }),
}

export default Carousel

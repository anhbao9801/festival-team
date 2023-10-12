import Carousel from "react-bootstrap/Carousel";
import Slide from "./slideshow.json";
import './style.scss'

function SlideShow() {
  return (
    <Carousel data-bs-theme="dark">
      {Slide.map((items, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 img2" src={items.img} alt={items.name}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default SlideShow;
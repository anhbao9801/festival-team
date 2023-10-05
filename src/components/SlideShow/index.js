import Carousel from "react-bootstrap/Carousel";
import Slide from "./slideshow.json";

function SlideShow() {
  return (
    <Carousel data-bs-theme="dark">
      {Slide.map((items, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={items.img} alt={items.name}  height={500}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default SlideShow;
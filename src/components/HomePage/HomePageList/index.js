import Detail from "../Catology/catology.json";
import { useParams } from "react-router-dom";
import Stores from "../../Store/Stores.json"
//import { Row, Col, Container} from "react-bootstrap";
import '../style.scss'
//import Tab from "react-bootstrap/Tab";
//import Tabs from "react-bootstrap/Tabs";
//import Button from "react-bootstrap/Button";

function HomePageDetail() {
  const { id } = useParams();
  let items = Detail.filter((items) => items.id == id);
  let itemss = Stores.filter((items) => items.id == id);
  items = items[0];
  itemss = itemss[0];

  
  console.log(items);
  return (
    <div className="container_wrapper">
        <div className="container_wrapper1">
            <img src={items.img} alt={items.img}  />
            <h1>{items.title}</h1>
            <h4>{items.Detail.time}</h4>
            <h2>Description</h2>
            <p>{items.Detail.DS}</p>
            <h2>Overview</h2>
            <p>{items.Detail.HIS}</p>
        </div>
        <div className="container_wrapper2">
            <img src={itemss.img} alt={itemss.img} className="img_store"/>
            <h2>{itemss.Tittle}</h2>
            <a href='/Store'>
                <button variant='primary'>Click to go to my Store</button>
            </a>
              </div>
    </div>
  )
}

export default  HomePageDetail;
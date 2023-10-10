import SlideShow from '../../../SlideShow'
import '../style.scss'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomePageList from '../../Catology/catology.json'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
function CatologyList() {
  const { id } = useParams();
    let items = HomePageList.filter((items) => items.Detail.ED == id);
    console.log(items);
  return (
    <div className='wrapper_slideshow'>
      <SlideShow />
      <div>
      <ul className='align_center1 catology'>
        <li>
          <a href='/catology/1' className=' link'>Culture Festival</a>
        </li>
        <li >
          <a href='/catology/2' className=' link'>Region Festival</a>
        </li>
        <li >
          <a href='/catology/3' className=' link'>Flower Festival</a>
        </li>
        <li >
          <a href='/catology/4' className=' link'>Music and Art Festival</a>
        </li>
        <li >
          <a href='/catology/5' className=' link'>Some other Festival</a>
        </li>
        <li >
          <a href='/Catologies/1' className=' link'>ALL Festival</a>
        </li>
        </ul>
      <div>
        <Container fluid="md" >
      <h1 className='align_center'>Best Festival in the World</h1>
    <Row >
    {items.map((item,index) => (
      <Col xs={12} sm={6} md={3} key={index} className='boximage'> 
        <Card style = {{marginTop:10 , marginBottom: 10 ,height: 450}} >
          <Card.Img style={{height:170}} variant='top' src={item.img} alt={item.img} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.DM}
            </Card.Text>
            <a href={`/detail/${item.id}`}>
                <button variant='primary'>Detail</button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
    </Container>
      </div>
    </div>
  </div>
  
  )
}

export default CatologyList
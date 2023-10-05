import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomePageList from '../HomePage/HomepageList.json'
import SlideShow from '../SlideShow'
import { Link } from 'react-router-dom'
function HomePage() {
  console.log(HomePageList)
  return (
    
    <Container fluid="md" >
      <SlideShow />
      <h1 className='align_center'>Best Festival in the World</h1>
    <Row>
    {HomePageList.map((item,index) => (
      <Col xs={12} sm={6} md={3}  key={index} className='boximage'>
        <Card style = {{marginTop:10 , marginBottom: 10 ,height: 450}}>
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
  )
}

export default HomePage
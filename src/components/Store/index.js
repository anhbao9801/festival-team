import React from 'react'
import SlideShow from '../SlideShow'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Storess from '../Store/Storess.json'


function Store() {
  const handleSub = () => {
    alert("Thank you !!")
  }
  return (
    <Container fluid="md" >
      <SlideShow />
      <h1 className='align_center'>Welcome to my store</h1>
    <Row>
    {Storess.map((item,index) => (
      <Col xs={12} sm={6} md={4}  key={index} className='boximage'>
        <Card style = {{marginTop:10 , marginBottom: 10 ,height: 650}}>
          <Card.Img style={{height:270}} variant='top' src={item.img} alt={item.img} />
          <Card.Body>
            <Card.Title>{item.Tittle}</Card.Title>
            <h4>Price:{item.Price}</h4>
            <Card.Text>
              {item.Detail}
            </Card.Text>
                <button variant='primary' onClick={handleSub}>Buy</button>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
    </Container>
  )
}

export default Store
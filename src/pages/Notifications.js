import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Notifications = () => {

    const [role, setRole] = useState('manager');

    useEffect(()=>{

    },[])

    return (
        <Container>
            <Row>
                <Col>
                <Card
    body
    inverse
    style={{
      backgroundColor: '#16a085',
      borderColor: '#333',
      margin:'1rem'
    }}
  >
 
    <CardText>
      Tommorow is bank holiday
      
    </CardText>

  </Card>    
                </Col>

            </Row>
        </Container>
    )
}

export default Notifications;
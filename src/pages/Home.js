import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {

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
                            backgroundColor: '#333',
                            borderColor: '#333'
                        }}
                    >
                        <CardTitle tag="h5">
                            Tasks
                        </CardTitle>
                        <CardText>
                            Recent Task -   With supporting text below as a natural lead-in to additional content.
                        </CardText>

                        <div style={{ display: 'flex' }}>
                            <Button style={{ margin: '1rem' }}>
                                Completed 10
                            </Button>
                            <Button style={{ margin: '1rem' }}>
                                Pending   2
                            </Button>


                            <Link to="/allTasks" style={{textDecoration:'none', color:'black'}}>
                            <Button style={{ margin: '1rem' }}>
                               View All Tasks
                            </Button>
                                 </Link>

                         
                        </div>

    


                    </Card>
                </Col>




                <Col>
                    <Card
                        body
                        inverse
                        style={{
                            backgroundColor: '#16a085',
                            borderColor: '#333'
                        }}
                    >
                        <CardTitle tag="h5">
                            Notifications
                        </CardTitle>
                        <CardText>
                            Recent Task -   With supporting text below as a natural lead-in to additional content.
                        </CardText>


                        <Link to="/notifications" style={{textDecoration:'none', color:'black'}}>
                            <Button style={{ margin: '1rem' }}>
                              View All
                            </Button>
                                 </Link>


                    </Card>
                </Col>



                        <Row>
                            <Col className='col-sm-12 col-md-6 offset-md-3' style={{marginTop:'10px'}}>
                            <Card
                        body
                        inverse
                        style={{
                            backgroundColor: '#16a085',
                            borderColor: '#333'
                        }}
                    >
                        <CardTitle tag="h5">
                           All Leave
                        </CardTitle>
                 
                
                        <div style={{ display: 'flex' }}>
                            <Button style={{ margin: '1rem' }}>
                                Total Leave - 10
                            </Button>
                            <Button style={{ margin: '1rem' }}>
                                Approved -  8
                            </Button>

                            <Button style={{ margin: '1rem' }}>
                                Sick leave -  8
                            </Button>
                        </div>

                        <div style={{margin:'auto'}}>
                        <Button style={{ margin: '1rem' }}>
                               Request leave
                            </Button>
                        </div>


                    </Card>
                            </Col>
                        </Row>


            </Row>
        </Container>
    )
}

export default Home;
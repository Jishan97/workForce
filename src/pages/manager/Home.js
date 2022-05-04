import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, Table, Button } from 'reactstrap';

const Home = () => {

    const [role, setRole] = useState('manager');

    useEffect(() => {

    }, [])

    return (
        <Container>
            <Row style={{height:'400px',overflow:'scroll'}}>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Task ID
                                </th>
                                <th>
                                   Task title
                                </th>
                                <th>
                                    People
                                </th>
                                <th>
                                    Status
                                </th>
                                <th>
                                   <Button>
                                       Add Task
                                       </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    11Aq
                                </td>
                                <td>
                                    Complete target
                                </td>
                                <td>
                                    @Viraj
                                </td>
                                <td>
                                    pending
                                </td>
                                <td>
                                <Button color='danger'>
                                       delete
                                       </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    11Aq
                                </td>
                                <td>
                                    Complete target
                                </td>
                                <td>
                                    @Viraj
                                </td>
                                <td>
                                    pending
                                </td>
                                <td>
                                <Button color='danger'>
                                       delete
                                       </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    11Aq
                                </td>
                                <td>
                                    Complete target
                                </td>
                                <td>
                                    @Viraj
                                </td>
                                <td>
                                    pending
                                </td>
                                <td>
                                <Button color='danger'>
                                       delete
                                       </Button>
                                </td>
                            </tr> 
                             <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    11Aq
                                </td>
                                <td>
                                    Complete target
                                </td>
                                <td>
                                    @Viraj
                                </td>
                                <td>
                                    pending
                                </td>
                                <td>
                                <Button color='danger'>
                                       delete
                                       </Button>
                                </td>
                            </tr> 
                             <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    11Aq
                                </td>
                                <td>
                                    Complete target
                                </td>
                                <td>
                                    @Viraj
                                </td>
                                <td>
                                    pending
                                </td>
                                <td>
                                <Button color='danger'>
                                       delete
                                       </Button>
                                </td>
                            </tr>
                              <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    11Aq
                                </td>
                                <td>
                                    Complete target
                                </td>
                                <td>
                                    @Viraj
                                </td>
                                <td>
                                    pending
                                </td>
                                <td>
                                <Button color='danger'>
                                       delete
                                       </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
</Row>






                <Row>
                    <Col className='col-sm-12 col-md-6 offset-md-3' style={{ marginTop: '10px' }}>
                     
                    </Col>
                </Row>


        
        </Container>
    )
}

export default Home;
import React from 'react';
import { Row, Card, CardTitle, CardText, Button } from 'reactstrap';

const AllTasks = ()=>{

    return (
        <Row>
              <Card
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333',
      margin:'1rem'
    }}
  >
    <CardTitle tag="h5">
    11Aq -   Complete target
    </CardTitle>
    <CardText>
      Status - Pending
    </CardText>
    <CardText>
      Start Working - <Button> Start</Button>
    </CardText>
    <CardText>
    <Button> 
        Mark as complete
        </Button>
    </CardText>
  </Card>

  <Card
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333',
      margin:'1rem'
    }}
  >
    <CardTitle tag="h5">
    11Aq -   Complete target
    </CardTitle>
    <CardText>
      Status - Pending
    </CardText>
    <CardText>
      Start Working - <Button> Start</Button>
    </CardText>
    <CardText>
    <Button> 
        Mark as complete
        </Button>
    </CardText>
  </Card>    
            <Card
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333',
      margin:'1rem'
    }}
  >
    <CardTitle tag="h5">
    11Aq -   Complete target
    </CardTitle>
    <CardText>
      Status - Pending
    </CardText>
    <CardText>
      Start Working - <Button> Start</Button>
    </CardText>
    <CardText>
    <Button> 
        Mark as complete
        </Button>
    </CardText>
  </Card>              <Card
    body
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333',
      margin:'1rem'
    }}
  >
    <CardTitle tag="h5">
    11Aq -   Complete target
    </CardTitle>
    <CardText>
      Status - Pending
    </CardText>
    <CardText>
      Start Working - <Button> Start</Button>
    </CardText>
    <CardText>
    <Button> 
        Mark as complete
        </Button>
    </CardText>
  </Card>

  
        </Row>
    )

}

export default AllTasks;
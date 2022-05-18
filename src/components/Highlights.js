// dependencies
import React from 'react'

// Bootstrap Components
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col' 


export default function Highlights () {
    return (
        <Row>
            <Col xs={12} md={4}>
        

                <Card className = "card-highlight">
                    <Card.Body>
                        <Card.Title>
                            <h2>Learn from Home</h2>
                        </Card.Title>
                        <Card.Text>
                            Enjoy Learning with the comfort of your room/home
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Col>
            <Col xs={12} md={4}>
                <Card className = "card-highlight">                 
                    <Card.Body>
                        <Card.Title>
                            <h2>Study Now, Pay Later</h2>
                        </Card.Title>
                        <Card.Text>
                            NEver be bothered by the expenses while learning
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={4}>
                <Card className = "card-highlight">                 
                    <Card.Body>
                        <Card.Title>
                            <h2>Be part of our community</h2>
                        </Card.Title>
                        <Card.Text>
                          Zuitt offers job for aspiring web developers from beginners to experience who want to refresh their minds on coding
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}


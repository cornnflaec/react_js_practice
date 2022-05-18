// dependencies
import React from 'react'

// Bootstrap Components
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col' 
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'


export default function CourseCard () {
    return (
        <Row>
           
        <Container fluid>
                <Card className = "course-Card">
                    <Card.Body>
                        <Card.Title>
                            <h2>Course</h2>
                        </Card.Title>

                        <Card.Text>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, sapiente vitae. Facere blanditiis ipsum odit magni ab quisquam repellendus a! Consequuntur.
                        </Card.Text>
                        <Card.Text>
                          Price : 
                          PHP : 40, 000
                        </Card.Text>

                        


                    </Card.Body>
                    <Button className='course-Button' variant="primary">Enroll Now</Button>
                </Card>
        </Container>
       



           
          
        </Row>

    )
}


import React from 'react'

/* 
    jumbotron from react-bootstrap/Jumbotron
    button from react-bootstrap/Button
    Row for react-bootstrap/Row 
    Col from react-bootstrap/Col 
*/

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col' 

export default function Banner (){
    return(
        <Row>
            <Col>
                <Jumbotron>
                    <h1>Zuitt Coding Bootcamp</h1>
                    <p>Opportunities for Everyone, Everywhere</p>
                    <Button variant="primary">Enroll Now</Button>
                </Jumbotron>
            </Col>
        </Row>
    )
}


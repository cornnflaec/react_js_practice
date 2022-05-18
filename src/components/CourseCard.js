// dependencies
import React, {useState} from 'react'

// Bootstrap Components
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col' 
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'


export default function CourseCard (props) { // props function 
    // Props - short term for properties, similar to the arguments/parameters found inside the funmcctions, a way for the parent component to receive information
        // through the use of props, decvs can sue the same compoonent and feed different info/ data for rendering
    let course = props.course

    /* 
       useState() used in react ot allow components to create manage its own data  and meant to be managed internally.
        - accepts an argument that is meant to be the value of the firs element in array

        in React.js, state values must not be cahnged directly. ALl changeds to the state values must be through thte setState() function
            - setState() is the second element in the create array
       
       the enrollees will start at zero. the reuslt of the useState() is an array of data that is then destructured into count and setCount

       setCount function is used to update the value of th count variable, depending on the times that the enroll function is triggered by the onClick command (button event)

       
    */
    const [count, setCount] = useState(0)
    const maxCount = 10

    function enroll(){
        if(count < maxCount) {
            setCount (count + 1)
       } else {
          alert("Max Seat Number Reached");
       }
    }
        //setCount (count + 1)
    
    return (
        <Row>
           
        <Container fluid>
                <Card className = "course-Card">
                    <Card.Body>

                        <Card.Title>
                            <h2>{course.name}</h2>
                        </Card.Title>

                        <Card.Text>
                            <h6>Description</h6>
                            <p>{course.description}</p>
                        </Card.Text>

                        <Card.Text>
                          <h6>Price :</h6>
                          <p>{course.price}</p>
                          <h6>Enrollees</h6>
                          <p>{count} Enrollees</p>
                        </Card.Text> 

                    </Card.Body>
                    <Button className='course-Button' variant="primary" onClick={enroll}>Enroll Now</Button>
                </Card>
        </Container>
        </Row>

    )
}


// set seat limit to 30 
// activity fo s46 
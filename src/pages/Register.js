/* 
    import : 
    react, useState, useEffect from react

    form container button from react bootstrap 

*/

import React, {useState, useEffect} from 'react'

// Bootstrap Components
import {Form, Container, Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [isDisabled, setIsDisabled] = useState('true')

    // useEffect(() => {
    //     console.log(email)
    // },[email]
    // )
    // useEffect(() => {
    //     console.log(password)
    // },[password]
    // )
    // useEffect(() => {
    //     console.log(passwordConfirm)
    // },[passwordConfirm]
    // )
    
    
    useEffect(() => {


        let isEmailNotEmpty = email !== null 
        let isPasswordnotEmpty = password !== null
        let isPasswordConfirmNotEmpty = passwordConfirm !== null 
        let isPasswordMatch = password === passwordConfirm

        if (isEmailNotEmpty && isPasswordnotEmpty && isPasswordConfirmNotEmpty && isPasswordMatch) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    },[email, password, passwordConfirm])


    /* 
    
    TwoWay binding

        to be able to capture/save the input value from the input elemetns, we can bind the value of the element with the states, we as devs cannot type into the inputes anymore because there is now value that is bound to it. We will ad an onChange event to be able to update the stat that is bout to the input field

        Two way bining is done so that we can assure taht we can save the input into out states as the users type into the element
    
    */

    function register(e){
        e.preventDefault()
        Swal.fire('Register successful , you may now login')

        // clears the input fields since thy update their respective variable values into an empty strin
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
    }

    /* 
        Two way binding is done so that we can assure that we can save the input ointo out states as the users type into the element. This is so that we dont have to save it before submitting
        
        e.target.value
        e - the event to whiuch the element will listen
        target - the element that is target of the event
        vallue - the value that the user has entered in that elemetn

    */

    return(
        <Container>
            <Form onSubmit={register}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Form.Text className="text-muted">We'll never share your email to anyone else</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ConfirmPassword</Form.Label>
                    <Form.Control type="Password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isDisabled}>Submit</Button>
            </Form>
        </Container>
    )
}


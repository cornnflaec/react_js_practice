import React, {useState, useEffect} from 'react'


import {Form, Container, Button, Card} from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [isDisabled, setIsDisabled] = useState('true')

    
    useEffect(() => {


        let isEmailNotEmpty = email !== null 
        let isPasswordnotEmpty = password !== null
        let isPasswordConfirmNotEmpty = passwordConfirm !== null 
        let isPasswordMatch = password === passwordConfirm

        if (isEmailNotEmpty && isPasswordnotEmpty) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    },[email, password, passwordConfirm])



    function register(e){
        e.preventDefault()
        Swal.fire('Register successful , you may now login')
 
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
    }



    return(
        <Container>
            <h1>Login</h1>
            <Form onSubmit={register}>

                <Form.Group>
                    <Form.Label>
                        <h3>Email Address</h3>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        <h3>Password</h3>
                    </Form.Label>
                    <Form.Control type="Password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
            
                <Button variant="primary" type="submit" disabled={isDisabled}>Login</Button>
            </Form>
        </Container>
    )
}

import React, {useState, useEffect} from 'react'

import Container from 'react-bootstrap/Container'

export default function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    },[count])

    /* 
        Effect hook - allow us to execute a piece of code whenever a component gets rendered to the page or if the value of a state changes.
            - the devs need useEffect for the page (or at least part of the page) to be reactive 
        useEffect - requires two argumentsl function and the array
         - function - to speciofy the codes to be executed
         - array - to set which variable is to be listened to , in term changing the stat,, for the funtion to be execuited. in some cases, not having any dependency array will cause thge page to have loops

    */

    return(
        <Container fluid>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </Container>
    )}
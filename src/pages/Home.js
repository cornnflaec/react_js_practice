import React from 'react'

import Container from 'react-bootstrap/Container'
import Banner from '../components/banner'
import Highlights from '../components/Highlights'
import CourseCard from '../components/CourseCard'


export default function Home(){
    return (
    <Container fluid>
        <Banner />
        <Highlights />
        <CourseCard />
    </Container>
    )
}


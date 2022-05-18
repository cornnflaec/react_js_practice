// Base imports

import React from 'react'
import Course from '../components/CourseCard'

// bootstrap dependencies
import Container from 'react-bootstrap/esm/Container'

// data import
import courses from '../mockData/courses'

export default function Courses() {
    const CourseCards = courses.map((course) => {
        return (
            <Course course={course} />
        )
    })
    return (
        <Container fluid>
            {CourseCards}
        </Container>
    )
}
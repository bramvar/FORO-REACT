import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import Discussion from './Discussion'

export default function PostSet() {
    return (
        <Container className="d-flex align-items-center justify-content-center flex-column">
            
            <Button className="w-50" type="submit" style={{padding:'10px', marginTop:'20px'}}>+ CREAR NUEVA DISCUCIÓN</Button>
            <Discussion subject="tatan" body="asfsadfad"/>
            
            
        </Container>
    )
}


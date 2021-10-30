import React, {useState} from 'react'
import { Container, Navbar, Nav,Button} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'

const Navigation = ()=> {

    const {currentUser}=useAuth()

    function handleLogout(){

    }

    return (
        <Navbar style={{width:'100%'}} expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">SIMPLE FORO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <div style={{color:"white"}}>{currentUser.email}</div>
                        <Button variant="link" onClick={handleLogout}>Cerrar sesión</Button>
                    </Navbar.Collapse>
                </Container>
         </Navbar>
    )
}

export default Navigation;

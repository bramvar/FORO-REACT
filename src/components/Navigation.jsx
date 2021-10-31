import React, {useState} from 'react'
import { Container, Navbar, Nav,Button,Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from "react-router-dom"

const Navigation = ()=> {

    const [error, setError]=useState("")
    const history=useHistory()
    const {currentUser, logout}=useAuth()

    async function handleLogout(){
        setError("")
        try {
            await logout()
            history.push('/login')   
        } catch (error) {
            setError("oh, hubo un error al cerrar sesión")
        }
    }

    return (
        <Container>
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
         {error && <Alert variant="danger">{error}</Alert>}
         </Container>
    )
}

export default Navigation;

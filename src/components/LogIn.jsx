
import React, {useRef, useState} from 'react'
import {Alert, Form, Button, Card} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from "react-router-dom"

export default function LogIn() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(ev){
        ev.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('ocurrio un error al intertar iniciar sesión')
        }

        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
  
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id="password">
                         <Form.Label>Contraseña</Form.Label>
                         <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>

                    <Button disabled={loading} className="w-100"  type="submit">Iniciar</Button>
                </Form>
            </Card.Body>
        </Card>
        
        <div className="w-100 text-center mt-2">
            ¿No te has registrado aún? <Link to="/signup" >Intentalo</Link>, será rápido 
        </div>
        </>
    )
}

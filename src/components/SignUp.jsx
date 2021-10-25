
import React, {useRef, useState} from 'react'
import {Alert, Form, Button, Card} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'

export default function SignUp() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(ev){
        ev.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('las contraseñas no coinciden')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('ocurrio un error al intertar registrar ')
        }

        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Registro</h2>
                {currentUser.email}
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

                    <Form.Group id="password-confirm">
                         <Form.Label>Confirmación de contraseña</Form.Label>
                         <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100"  type="submit">Registrarse</Button>
                </Form>
            </Card.Body>
        </Card>
        
        <div className="w-100 text-center mt-2">
            ¿Tienes una cuenta ya? Iniciar sesión 
        </div>
        </>
    )
}

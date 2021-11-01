import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function Discussion({subject,body}) {
    return (
      
           
                <Card className="w-50" style={{marginTop:"50px"}}>
                    <Card.Body>
                        <h2 className="mb-4">{subject}</h2>
                        <p>{body}</p>
                    </Card.Body>
                </Card>
   
            
        
        
    )
}

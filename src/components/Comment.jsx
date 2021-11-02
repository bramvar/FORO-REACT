import React from 'react'
import {Card} from 'react-bootstrap'

export default function Comment({reply,author}) {
    return (
            <Card >
                <Card.Body>
                    <p>{reply}</p> 
                    <div style={{textAlign:"right"}}>
                        {author}
                    </div>       
                </Card.Body>             
            </Card>
    )
}

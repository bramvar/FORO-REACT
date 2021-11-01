import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Comment from './Comment'

export default function Discussion({subject,body,author,comments}) {
    return (
                <Card className="w-50" style={{marginTop:"50px"}}>
                    <Card.Body>
                        <h3 className="mb-4">{subject}</h3>
                        <p>{body}</p>
                        <div style={{textAlign:"right"}}>
                            escrito por {author}
                        </div>
                    </Card.Body>
                    <Container className="w-70 d-flex justify-content-end flex-column" >
                        <h4>Comments</h4>
                        {comments.map((c)=>(
                            <Comment reply={c.replyText} author={c.creator}/>
                        ))}
                        
                    </Container >
                    
                </Card>
   
            
        
        
    )
}

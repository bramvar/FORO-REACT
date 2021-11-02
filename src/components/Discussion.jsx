import React,{useState} from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Comment from './Comment'

export default function Discussion({subject,body,author,comments}) {

    console.log("this", comments)

    return (
                <Card className="w-50" style={{marginTop:"50px"}}>
                    <Card.Body>
                        <h3 className="mb-4">{subject}</h3>
                        <p>{body}</p>
                        <div style={{textAlign:"right"}}>
                            escrito por {author}
                        </div>
                    </Card.Body>
                    <Container className="w-100 d-flex justify-content-center flex-column" >
                        <div className="d-flex">
                            <h4 style={{marginRight:"10px"}}>Comentarios</h4> 
                            <Button className="w-20" style={{marginBottom:"10px"}} variant="primary" >+</Button>
                        </div>
                        
                        {comments.map((c)=>(
                            <Comment reply={c.replyText} author={c.creator}/>
                        ))}
                        
                    </Container >
                    
                </Card>
   
            
        
        
    )
}

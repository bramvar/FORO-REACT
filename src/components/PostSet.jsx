import React,{useEffect,useState} from 'react'
import {onSnapshot,collection} from "firebase/firestore"
import {Form, Button, Card, Container} from 'react-bootstrap'
import Discussion from './Discussion'
import db from "../firebase.js"
import Modal from './modals/Modal'


export default function PostSet() {

    const [active, setActive] = useState(false)
    const [inputs, setInputs] = useState({});

    const toggle = () => {
        setActive(!active)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    function postDiscussion(title,message){
        var file=JSON.stringify({creator: "god", title: title, godMessage: message})
    }

    const [discussions, setDiscussions] = useState([])
    console.log(discussions)

    useEffect(() =>     
        onSnapshot(collection(db,"discussions"),(snapshot)=>
            setDiscussions(snapshot.docs.map(doc=>doc.data()))
        ), [])

    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center flex-column">

                <Button className="w-50" type="submit" style={{padding:'10px', marginTop:'20px'}} onClick={toggle}>+ CREAR NUEVA DISCUCIÓN</Button>

                {discussions.map((dis)=>(
                    <Discussion subject={dis.title} body={dis.godMessage} author={dis.creator} comments={dis.replies}/>
                ))}

            </Container>

            <Modal active={active} toggle={toggle}>


                
               {  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <label>Título</label>
                        <input type="text" name="title" value={inputs.title || ""}
                        onChange={handleChange}/>
                        
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <label>Mensaje</label>
                        <input as="textarea" rows="3" type="text" name="message" value={inputs.message || ""}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Enviar
                    </Button>
                </Form>
}
            </Modal>
        </div>
    )
}


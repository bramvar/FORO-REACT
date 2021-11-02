import React,{useEffect,useState} from 'react'
import {onSnapshot,collection} from "firebase/firestore"
import {Form, Button, Card, Container} from 'react-bootstrap'
import Discussion from './Discussion'
import db from "../firebase.js"
import Modal from './modals/Modal'

export default function PostSet() {

    const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(!active)
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

                <h1>modal test</h1>
            </Modal>
        </div>
    )
}


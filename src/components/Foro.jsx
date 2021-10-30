import React from 'react'
import { Container} from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import Navigation from "./Navigation"

export default function Foro() {
    return (
        <>
        <Navigation/>
        <Switch>
            <Route exact path="/" />
        </Switch>
        
            
        
        </>
    )
}

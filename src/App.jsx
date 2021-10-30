import React from "react"
import Foro from "./components/Foro"
import { Container } from "react-bootstrap"
import SignUp from "./components/SignUp"
import AuthProvider from "./contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
    

import LogIn from "./components/LogIn"

const App = () => {
    return (

            <Container>
                    <Router>
                         <AuthProvider>
                             <Switch>
                                 <Route exact path="/" component={Foro} />
                                 <Route path="/signup" component={SignUp} />
                                 <Route path="/login" component={LogIn} />
                             </Switch>
                         </AuthProvider>
                    </Router>
            </Container>
        
        
        
    )
}

export default App;
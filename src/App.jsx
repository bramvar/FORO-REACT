import React from "react"
import { Container } from "react-bootstrap"
import SignUp from "./components/SignUp"
import AuthProvider from "./contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Foro from "./components/Foro"
import LogIn from "./components/LogIn"

const App = () => {
    return (
        
            <Container className="d-flex align-items-center justify-content-center"
                    style={{minHeight: "100vh"}}
                 >
                <div className="w-100" style={{maxWidth:"400px"}}>
                    <Router>
                         <AuthProvider>
                             <Switch>
                                 <Route exact path="/" component={Foro} />
                                 <Route path="/signup" component={SignUp} />
                                 <Route path="/login" component={LogIn} />
                             </Switch>
                         </AuthProvider>
                    </Router>
                </div>
            
            </Container>
        
        
        
    )
}

export default App;
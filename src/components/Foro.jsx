import React, {useState} from 'react'
import { Container} from 'react-bootstrap'
import { Route, Router, Switch } from 'react-router'
import Navigation from "./Navigation"
import PostSet from './PostSet'
import Profile from './Profile'

export default function Foro() {
    return (
        <>
        
            <Navigation/>
            <PostSet/>
        
        </>
    )
}

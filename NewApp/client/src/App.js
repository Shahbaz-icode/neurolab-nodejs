import React from "react";
import { Container, Nav, Typography } from 'react-bootstrap'

import memories from './images/memories.png'
const App = () => {
    return (
        <Container maxidth="lg">
            <Nav poaition="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" height="60"/>
            </Nav>
        </Container>
    );
}

export default App;
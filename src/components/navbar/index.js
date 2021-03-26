import React from 'react'
import { Container, Header, Input, Button } from './styles/navbar'

export default function Navbar({children, ...restporps}){
    return (
        <Container>
            <Header>
                OutKast
            </Header>
            <Input/>
            <Button/>
        </Container>
    )
}


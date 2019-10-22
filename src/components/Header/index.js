import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo.svg'
import { Container, Content, Profile } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="MeetApp" />

        <Profile>
          <div>
            <strong>Andre Marcelo</strong>
            <Link to="/profile">Meu Perfil</Link>
          </div>
          <button type="button">Sair</button>
        </Profile>
      </Content>
    </Container>
  )
}

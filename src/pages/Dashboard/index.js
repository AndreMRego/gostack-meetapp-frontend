import React from 'react'

import { Container, Meetup } from './styles'

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <button type="button">Novo Meetup</button>
      </header>

      <ul>
        <Meetup>
          <strong>NodeJS Meetup</strong>
          <span>24 de Agosto, ás 20h</span>
        </Meetup>
      </ul>
    </Container>
  )
}

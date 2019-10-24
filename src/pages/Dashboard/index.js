import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Container, Meetup } from './styles'
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md'
import api from '~/services/api'
import history from '~/services/history'

export default function Dashboard() {
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing')

      const data = response.data.map(obj => ({
        ...obj,
        dateFormatted: format(parseISO(obj.date), "d 'de' MMMM, 'às' HH'h'", {
          locale: pt,
        }),
      }))
      setMeetups(data)
    }
    loadMeetups()
  }, [])

  function newMeetup() {
    history.push('/meetup/new')
    console.tron.log('novo')
  }

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <button type="button" onClick={newMeetup}>
          <MdAddCircleOutline size={20} color="#FFF" /> Novo Meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.date}>
            <strong>{meetup.title}</strong>
            <span>
              {meetup.dateFormatted} <MdChevronRight color="#FFF" size={24} />
            </span>
          </Meetup>
        ))}
      </ul>
    </Container>
  )
}

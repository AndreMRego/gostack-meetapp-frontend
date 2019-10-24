import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import { MdAddCircleOutline } from 'react-icons/md'

import DatePicker from '~/components/DatePicker'
import BannerInput from '~/components/BannerInput'
import api from '~/services/api'
import history from '~/services/history'

import { Container } from './styles'

const schema = Yup.object().shape({
  banner_id: Yup.number().required('A imagem é obrigatória'),
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.string().required('A data é obrigatória'),
  localization: Yup.string().required('A localização é obrigatória'),
})
export default function MeetupNew() {
  async function handleSubmit(data) {
    try {
      const response = await api.post('meetups', data)

      if (response.status) {
        history.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição Completa" />

        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="localization" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} color="#FFF" />
          Salvar Meetup
        </button>
      </Form>
    </Container>
  )
}

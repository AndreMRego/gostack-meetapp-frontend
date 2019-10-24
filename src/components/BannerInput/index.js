import React, { useState, useRef, useEffect } from 'react'
import { useField } from '@rocketseat/unform'
import { MdPhotoCamera } from 'react-icons/md'
import api from '~/services/api'

import { Container } from './styles'

export default function BannerInput({ name }) {
  const ref = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  const [file, setFile] = useState(defaultValue && defaultValue.id)
  const [preview, setPreview] = useState(defaultValue && defaultValue.url)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.file',
    })
  }, [ref.current, fieldName]); // eslint-disable-line


  async function handleChange(e) {
    const data = new FormData()

    data.append('file', e.target.files[0])

    const response = await api.post('files', data)

    const { id, url } = response.data

    setFile(id)
    setPreview(url)
  }
  return (
    <Container>
      <label htmlFor="banner">
        {preview && <img src={preview} alt={file.name} />}
        {!preview && (
          <>
            <MdPhotoCamera color="#FFF" size={54} />
            <span>Selecionar imagem</span>
          </>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  )
}

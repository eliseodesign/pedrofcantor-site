import { useState, ChangeEvent, FormEvent } from 'react'

interface Props {
  shortname: string
  title: string
  description: string
  image: string | number | readonly string[] | undefined
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function FormDetail({ shortname, title, description, handleInput, handleSubmit, image} : Props) {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="shortname"
        placeholder="Url"
        value={shortname}
        onChange={handleInput}
      />
      <input
        type="text"
        name="title"
        placeholder="Titulo"
        value={title}
        onChange={handleInput}
      />
      <input
        type="text"
        name="description"
        placeholder="Descripcion"
        value={description}
        onChange={handleInput}
      />
      <input type="file" 
        name='imageArticle'
        placeholder='Subir una imagen'
        onChange={handleInput}

      />
      {/* <input type="file" name="file" placeholder='file' /> */}
      <button type="submit">Crear Articulo</button>
    </form>
  );
}

export default FormDetail;

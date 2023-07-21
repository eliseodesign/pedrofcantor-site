/* eslint-disable max-len */
import {  ChangeEvent, FormEvent } from 'react'

interface Props {
  shortname: string
  title: string
  description: string
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const buttonClass = 'py-2 px-5 text-sm bg-primary transition transition-bg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:opacity-70 focus:z-10 focus:ring-4 focus:ring-gray-200 mx-4'

const inputClass = 'rounded px-4 py-2 focus:outline-none text-gray-800'

function FormDetail({ shortname, title, description, handleInput, handleSubmit }: Props) {

  return (
    <form onSubmit={handleSubmit} className=' grid grid-cols-3 gap-2 p-3 max-md:grid-cols-1'>
      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <input
          className={`${inputClass}`}
          type="text"
          name="shortname"
          placeholder="Url"
          value={shortname}
          onChange={handleInput}
        />
        <input
          className={`${inputClass}`}
          type="text"
          name="title"
          placeholder="Titulo"
          value={title}
          onChange={handleInput}
        />
        <input
          className={`${inputClass} col-span-2`}
          type="text"
          name="description"
          placeholder="Descripcion"
          value={description}
          onChange={handleInput}
        />
      </div>

      <div className='flex flex-col justify-start items-start'>
        <input
          className={`${inputClass} block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary hover:file:bg-violet-100 file:cursor-pointer`} 
          type="file"
          name='imageArticle'
          placeholder='Subir una imagen'
          onChange={handleInput}
        />
        
        <button className={buttonClass} type="submit">Crear Articulo</button>
      </div>

    </form>
  );
}

export default FormDetail;

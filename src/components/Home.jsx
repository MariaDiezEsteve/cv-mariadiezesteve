import React from 'react'
import "./Home.scss"


function Home({name}) {
    //const {name} = props - Estamos vinculando el nombre que aparece como constante en app.jsx a este componente mediante props
  return (
     <header className='Home'>
        <h1 className='Home__title'>{name}</h1>
      </header>
  )
}

export default Home
import { useState } from 'react'
import './App.css'
import Search from './components/search'
import Songs from './components/songs'

function App() {

  return (
    <div>
      <div className=' flex-row fixed left-10 mr-10 pr-10 border-r-2 h-screen'>
        <h1 className=' border-b-2'>PlayList</h1>
        <div className=' mt-36'>
          <Search />
        </div>
      </div >
      <div className=' ml-96 md:mx-auto md:max-w-fit'>
        <Songs />
      </div>
    </div >
  )
}

export default App

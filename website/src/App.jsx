import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/search'
import Songs from './components/songs'
import fetchData from './utils/fetchData'

function App() {
  const [song, setSongs] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    // 
    const API_URL = `/api/songs`
    const doFetch = async () => {
      try {
        const [data, error] = await fetchData(API_URL)
        if (data) setSongs(data)
        console.log(data)
      } catch (error) {
        if (error) setError(error)
      }
    }
    doFetch()
  }, [])

  return (
    <div>
      <div className=' flex-row fixed left-10 mr-10 pr-10 border-r-2 h-screen'>
        <h1 className=' border-b-2'>PlayList</h1>
        <div className=' mt-36'>
          <Search />
        </div>
      </div >
      <div className=' ml-96 md:mx-auto md:max-w-fit'>
        <Songs song={song} />
      </div>
    </div >
  )
}

export default App

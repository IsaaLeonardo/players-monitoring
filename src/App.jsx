import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import PlayersList from './components/PlayersList'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className='mt-20'>
      <Header />
      <div className="md:flex mt-10">
        <Form
          players={ players }
          setPlayers={ setPlayers }
        />
        <PlayersList />
      </div>
    </div>
  )
}

export default App

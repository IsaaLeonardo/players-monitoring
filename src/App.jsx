import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import PlayersList from './components/PlayersList'

function App() {
  return (
    <div className='mt-20'>
      <Header />
      <div className="md:flex mt-10">
        <Form />
        <PlayersList />
      </div>
    </div>
  )
}

export default App

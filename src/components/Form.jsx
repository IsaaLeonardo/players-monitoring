import { useState, useEffect } from "react"
import Error from "./Error"
import createId from "../js/createId"

function Form({ players, setPlayers, player }) {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [date, setDate] = useState('')
  const [oxigenLevels, setOxigenLevels] = useState('')
  const [heartRate, setHeartRate] = useState('')
  const [syntoms, setSyntoms] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(player).length === 0) return

    const { name, position, date, oxigenLevels, heartRate, syntoms } = player

    setName(name)
    setPosition(position)
    setDate(date)
    setOxigenLevels(oxigenLevels)
    setHeartRate(heartRate)
    setSyntoms(syntoms)
  }, [player])

  const handleSubmit = e => {
    e.preventDefault()
    
    if ( [name, position, date, oxigenLevels, heartRate].includes('') ) {
      setError(true)
      return
    }

    setError(false)

    // Set player data
    const playerData = {
      id: player.id || createId(),
      name,
      position,
      date,
      oxigenLevels,
      heartRate,
      syntoms
    }

    // Create or edit players
    if (player.id) {
      const index = players.findIndex(p => p.id === player.id)
      players[index] = playerData
      setPlayers([...players])
    } else {
      setPlayers([...players, playerData])
    }
    
    // Reset form
    setName('')
    setPosition('')
    setDate('')
    setOxigenLevels('')
    setHeartRate('')
    setSyntoms('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>

      <p className="text-center text-lg mt-1 mb-3">
        Añade jugadores y {''}
        <span className="text-indigo-600 font-bold">registra datos</span>
      </p>

      <form
        className="bg-white py-10 px-5 shado-md rounded-lg mb-10"
        onSubmit={ handleSubmit }
      >
        { error &&
          <Error>
            <p>Todos los campos son obligatorios <div>(excepto síntomas)</div></p>
          </Error>}
        <div className="mb-8">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del Jugador"
            className="w-full border-2 p-2 placeholder-gray-400 rounded-md"
            value={ name }
            onChange={ e => setName(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold mb-2">
            Posición
          </label>
          <select
            className="w-full border-2 p-2 rounded-md bg-white"
            value={ position }
            onChange={ e => setPosition(e.target.value)}
          >
            <option value="">--Selecciona la posición--</option>
            <option value="p">Pitcher</option>
            <option value="c">Catcher</option>
            <option value="1b">1era Base</option>
            <option value="2b">2da Base</option>
            <option value="3b">3era Base</option>
            <option value="ss">Shortstop</option>
            <option value="lf">Left Field</option>
            <option value="cf">Center Field</option>
            <option value="rf">Right Field</option>
          </select>
        </div>

        <div className="mb-8">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold mb-2">
            Fecha de práctica
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Nombre del Jugador"
            className="w-full border-2 p-2 placeholder-gray-400 rounded-md"
            value={ date }
            onChange={ e => setDate(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="oxigenLevels" className="block text-gray-700 uppercase font-bold mb-2">
            Oxigenación
          </label>
          <input
            type="text"
            name="oxigenLevels"
            id="oxigenLevels"
            placeholder="90,00 %"
            className="w-full border-2 p-2 placeholder-gray-400 rounded-md"
            value={ oxigenLevels }
            onChange={ e => setOxigenLevels(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="heartRate" className="block text-gray-700 uppercase font-bold mb-2">
            Ritmo Cardíaco
          </label>
          <input
            type="text"
            name="heartRate"
            id="heartRate"
            placeholder="200 lpm"
            className="w-full border-2 p-2 placeholder-gray-400 rounded-md"
            value={ heartRate }
            onChange={ e => setHeartRate(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="syntoms" className="block text-gray-700 uppercase font-bold mb-2">
            Síntomas (opcional)
          </label>
          <textarea
            type="text"
            name="syntoms"
            id="syntoms"
            placeholder="Cansancio, dolor, lesiones"
            className="w-full border-2 p-2 placeholder-gray-400 rounded-md"
            value={ syntoms }
            onChange={ e => setSyntoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={ Object.keys(player).length === 0 ? "Agregar datos" : "Editar datos" }
          className="bg-indigo-600 w-full text-center p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
        />
      </form>
    </div>
  )
}

export default Form

function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>

      <p className="text-center text-lg mt-1 mb-3">
        Añade jugadores y {''}
        <span className="text-indigo-600 font-bold">registra datos</span>
      </p>

      <form className="bg-white py-10 px-5 shado-md rounded-lg mb-10">
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
          />
        </div>

        <div className="mb-8">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold mb-2">
            Posición
          </label>
          <select className="w-full border-2 p-2 rounded-md bg-white">
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
          />
        </div>

        <input
          type="submit"
          value="Agregar datos"
          className="bg-indigo-600 w-full text-center p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
        />
      </form>
    </div>
  )
}

export default Form

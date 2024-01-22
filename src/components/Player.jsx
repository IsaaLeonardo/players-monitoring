function Player({ player, setPlayer }) {
  const { name, position, date, oxigenLevels, heartRate, syntoms } = player

  return (
    <div className="bg-white py-10 px-5 shadow-md rounded-xl mb-3">
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">{ name }</span>
      </p>

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Posición: {''}
        <span className="font-normal normal-case">{ position }</span>
      </p>

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Fecha de práctica: {''}
        <span className="font-normal normal-case"> { date } </span>
      </p>

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Oxigenación: {''}
        <span className="font-normal normal-case"> { oxigenLevels } </span>
      </p>

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Ritmo cardíaco: {''}
        <span className="font-normal normal-case"> { heartRate } </span>
      </p>

      { syntoms && (
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">{ syntoms }</span>
        </p>
      )}

      <div className="flex flex-col gap-y-3 md:justify-between md:flex-row	mt-5">
        <button
          className="bg-indigo-600 hover:bg-indigo-800 transition-all p-2 text-white uppercase font-bold rounded-md md:w-32"
          onClick={ () => setPlayer(player) }
        >
          Editar
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 transition-all p-2 text-white uppercase font-bold rounded-md md:w-32"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Player

function Player({ player }) {
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

      <p className="font-bold mb-1 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="font-normal normal-case">{ syntoms }</span>
      </p>
    </div>
  )
}

export default Player

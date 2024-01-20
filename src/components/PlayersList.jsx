import Player from "./Player"

function PlayersList() {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="text-center font-black text-3xl">Listado de Jugadores</h2>

      <p className="text-center text-lg mt-1 mb-3">
        Administra jugadores y {''}
        <span className="text-indigo-600 font-bold">visualiza datos</span>
      </p>

      <div className="px-5 md:max-h-[792px] md:overflow-y-scroll">
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
    </div>
  )
}

export default PlayersList

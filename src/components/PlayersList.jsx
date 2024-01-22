import Player from "./Player"

function PlayersList({ players, setPlayer, handleDelete }) {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      { players.length === 0 ? (
        <>
          <h2 className="text-center font-black text-3xl">No hay jugadores registrados</h2>
          <p className="text-center text-lg mt-1 mb-3">
            Agrega jugadores y {''}
            <span className="text-indigo-600 font-bold">registra datos</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-3xl">Listado de Jugadores</h2>
          <p className="text-center text-lg mt-1 mb-3">
            Administra jugadores y {''}
            <span className="text-indigo-600 font-bold">visualiza datos</span>
          </p>
        </>
      )}
      

      <div className="px-5 md:max-h-[792px] md:overflow-y-scroll">
        {
          players.map(player => (
            <Player
              key={ player.id }
              player={ player }
              setPlayer={ setPlayer }
              handleDelete={ handleDelete }
            />
          ))
        }
      </div>
    </div>
  )
}

export default PlayersList

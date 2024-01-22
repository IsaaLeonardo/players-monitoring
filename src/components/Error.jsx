function Error({ children }) {
  return (
    <p className="bg-red-500 text-white p-3 text-center mb-5 font-bold uppercase rounded-md">
      { children }
    </p>
  )
}

export default Error

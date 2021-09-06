const ContactScreen = () => {
  return (
    <>
      {/* bg-radial-at-tl from-blue-500 via-orange-600 to-fuchsia-800 */}
      {/* bg-gradient-to-br from-green-300 via-1-sky-500 to-1-teal-500 */}
      {/* pink-500 to red-500 */}
      {/* grenn-500 to green-700 */}
      <div className="hero h-96 pt-16 overflow-hidden bg-gradient-to-r from-pink-700 to-pink-600 text-primary-content">
        <div className="text-center hero-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold">
              Productos y Servicios
            </h1>
            <p className="mb-5">
              Puedes visualizar todos los productos y servicios en esta sección
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactScreen

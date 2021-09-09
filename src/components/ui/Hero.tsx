// images
// https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
// https://images.pexels.com/photos/6608888/pexels-photo-6608888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
// https://images.pexels.com/photos/4049793/pexels-photo-4049793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
// https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
// https://www.diariofutrono.cl/files/bt_5f230742bcdef.jpg
// https://images.pexels.com/photos/7620574/pexels-photo-7620574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
// https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7620574/pexels-photo-7620574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')"
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          className="text-center hero-content  rounded-box bg-opacity-60 glass "
          // style={{
          //   backgroundImage: `linear-gradient(
          //     135deg,rgb(255 255 255/var(--glass-opacity,10%)),rgb(0 0 0/0)),
          //     linear-gradient(var(--glass-reflex-degree,100deg),rgb(255 255 255/var(--glass-reflex-opacity,10%)) 25%,rgb(0 0 0/0) 0)`,
          //   opacity: 0.6
          // }}
        >
          <div className="max-w-lg ">
            <h1 className="mb-5 text-5xl lg:text-7xl font-bold text-white">
              Bienvenidos a Busca
              <span className="text-primary text-8xl inline-block transform rotate-12 translate-y-4 -translate-x-2">
                2
              </span>
            </h1>
            <p className="mb-5">
              Esta plataforma fue creada con el objetivo de centralizar y visualizar los servicios
              de la comunidad, además de darle un fácil y rápido acceso a la información estos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

// images
// https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
// https://images.pexels.com/photos/6608888/pexels-photo-6608888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
// https://images.pexels.com/photos/4049793/pexels-photo-4049793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
// https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
// https://images.pexels.com/photos/7620574/pexels-photo-7620574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
// https://www.diariofutrono.cl/files/bt_5f230742bcdef.jpg
const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7620574/pexels-photo-7620574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')"
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Bienvenidos a TuServicio</h1>
            <p className="mb-5">
              Esta plataforma fue creada con el objetivo de centralizar y visualizar los servicios
              de la comunidad, además de darle un fácil y rápido acceso a la información estos.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* <div className="hero min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-primary to-secondary text-primary-content">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl  lg:text-7xl font-bold">Bienvenidos a TuServicio</h1>
            <p className="mb-5">
              Esta plataforma fue creada con el objetivo de centralizar y visualizar los servicios
              de la comunidad, además de darle un fácil y rápido acceso a la información estos.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

      {/* <div className="relative bg-base-100 overflow-hidden pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-base-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-base-100 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <section className="pt-10 mx-auto max-w-7xl px-4 sm:mp-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-base-content sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Bienvenidos a </span>
                  <span className="block text-primary xl:inline">TuServicio</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Esta plataforma fue creada con el objetivo de centralizar y visualizar los
                  servicios de la comunidad, además de darle un fácil y rápido acceso a la
                  información estos.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button className="btn btn-primary btn-lg">Get started</button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="btn btn-lg">Live demo</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div> */}
    </>
  )
}

export default Hero

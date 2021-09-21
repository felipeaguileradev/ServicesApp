import { useEffect, useState } from 'react'
// import { NavLink, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { themeChange } from 'theme-change'

const Navbar = () => {
  // const location = useLocation()
  const [darkTheme, setDarkTheme] = useState(false)
  const [navbarActive, setNavbarActive] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    themeChange(false)
    const theme = document.querySelector('html')?.getAttribute('data-theme')

    if (theme === 'dark') {
      setDarkTheme(true)
    } else {
      setDarkTheme(false)
    }
  }, [])

  const changeTheme = () => {
    console.log('test')
    setDarkTheme(!darkTheme)
  }

  const changeBackground = () => {
    if (window.scrollY <= 80) {
      setNavbarActive(true)
    } else {
      setNavbarActive(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  // navbarActive && location.pathname === '/'
  return (
    <>
      <nav
        className={
          navbarActive
            ? 'navbar inset-x-0 top-0 z-40 w-full fixed transition duration-200 ease-in-out border-b border-transparent bg-transparent text-primary-content'
            : 'navbar inset-x-0 top-0 z-40 w-full fixed transition duration-200 ease-in-out border-b border-transparent bg-transparent shadow-lg bg-neutral text-neutral-content rounded-box'
        }
      >
        {/* LOGO O NOMBRE */}
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold">
            Busca
            <span className="text-primary text-3xl inline-block transform rotate-12 translate-y-1.5 -translate-x-0.5">
              2
            </span>
          </span>
        </div>
        {/* MENU */}
        <div className="flex-none hidden px-2 mx-2 lg:flex">
          <div className="flex items-stretch">
            <NavLink
              to="/"
              exact
              activeClassName="btn-active"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              Inicio
            </NavLink>
            <NavLink
              to="/services"
              exact
              activeClassName="btn-active"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
              Servicios
            </NavLink>
            <NavLink
              to="/contact"
              exact
              activeClassName="btn-active"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              Contacto
            </NavLink>
          </div>
        </div>

        {/* CAMBIO DE TEMA */}
        <div className="hidden lg:flex justify-center">
          <div className="flex items-center space-x-4">
            <svg width="32" height="32" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 2a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V3.4A1.4 1.4 0 0116 2zM6.1 6.1a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 11-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm19.8 0a1.4 1.4 0 010 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm-7 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8H3.4A1.4 1.4 0 012 16zm23.8 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8h-1.4a1.4 1.4 0 01-1.4-1.4zm-2.87 6.93a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 01-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm-15.84 0a1.4 1.4 0 011.98 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99zM16 25.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4a1.4 1.4 0 011.4-1.4z"
                fill="url(#paint0_linear)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="2"
                  y1="2"
                  x2="30"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    className="transition-all duration-200"
                    stopColor={darkTheme ? '#d4d4d8' : '#FACC15'}
                  ></stop>
                  <stop
                    className="transition-all duration-200"
                    offset="1"
                    stopColor={darkTheme ? '#d4d4d8' : '#FA9D16'}
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              data-toggle-theme="dark,light"
              checked={darkTheme}
              onChange={changeTheme}
            ></input>
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className={
                darkTheme
                  ? 'transition-colors duration-200 text-gray-900 '
                  : 'transition-colors duration-200 text-gray-300 '
              }
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"
              ></path>
            </svg>
          </div>
        </div>

        {/* ICONO MENU MOBILE */}
        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={() => setOpenMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* TODO:probando */}
      {/* MENU MOBILE */}
      {openMenu && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-40">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-base-200 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="text-lg font-bold">
                    Busca
                    <span className="text-primary text-3xl inline-block transform rotate-12 translate-y-1.5 -translate-x-0.5">
                      2
                    </span>
                  </span>
                </div>

                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpenMenu(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-2">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="btn-active"
                    className="btn btn-ghost rounded-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 mr-2 stroke-current text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                    Inicio
                  </NavLink>
                  <NavLink
                    to="/services"
                    exact
                    activeClassName="btn-active"
                    className="btn btn-ghost rounded-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 mr-2 stroke-current text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                    Servicios
                  </NavLink>
                  <NavLink
                    to="/contact"
                    exact
                    activeClassName="btn-active"
                    className="btn btn-ghost rounded-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 mr-2 stroke-current text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                    Contacto
                  </NavLink>
                </nav>
              </div>
            </div>

            <div className="py-6 px-5 space-y-6">
              <span className="text-center block font-semibold uppercase">Cambio de tema</span>
              <div className="lg:hidden flex justify-center ">
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // className="h-6 w-6"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill={darkTheme ? 'none' : 'currentColor'}
                    stroke="currentColor"
                    className={
                      darkTheme
                        ? 'transition-colors duration-200 text-gray-500'
                        : 'transition-colors duration-200 text-1-yellow-500 '
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    data-toggle-theme="dark,light"
                    checked={darkTheme}
                    onChange={changeTheme}
                  ></input>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      darkTheme
                        ? 'transition-colors duration-200 text-gray-100 '
                        : 'transition-colors duration-200 text-gray-500 '
                    }
                    fill={darkTheme ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

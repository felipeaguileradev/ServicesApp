import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [navbarActive, setNavbarActive] = useState(false)

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
    setDarkTheme(!darkTheme)
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarActive(true)
    } else {
      setNavbarActive(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav
      className={
        navbarActive
          ? 'navbar inset-x-0 top-0 z-50 w-full fixed transition duration-200 ease-in-out border-b border-transparent bg-transparent shadow-lg bg-neutral text-neutral-content rounded-box'
          : 'navbar inset-x-0 top-0 z-50 w-full fixed transition duration-200 ease-in-out border-b border-transparent bg-transparent text-primary-content'
      }
    >
      {/* LOGO O NOMBRE */}
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">TUSERVICIO</span>
      </div>
      {/* MENU */}
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn">
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
          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
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
          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
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
          </a>
        </div>
      </div>
      <input
        type="checkbox"
        className="toggle toggle-primary"
        data-toggle-theme="dark,light"
        checked={darkTheme}
        onChange={changeTheme}
      ></input>
      {/* ICONO MENU */}
      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost">
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
      </div> */}
    </nav>
  )
}

export default Navbar

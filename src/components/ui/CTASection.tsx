import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-primary to-accent text-primary-content">
        {/* <div className=" bg-gradient-to-r from-green-300 via-green-400 to-purple-700 text-primary-content"> */}
        {/* // <div className="bg-primary"> */}
        <div className="max-w-7xl mx-auto py-12  px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className=" tracking-tight text-1-warmGray-100 sm:text-4xl">
            <span className="block text-3xl font-extrabold">
              ¿Tienes un servicio o producto que ofrecer?
            </span>
            <span className="block text-2xl">
              Y quieres que sea publicado, para que la comunidad lo conozca
            </span>
          </h2>
          <Link to="/contact" className="btn btn-wide btn-lg bg-primary border-none">
            Contactar
          </Link>
        </div>
      </div>
    </>
  )
}

export default CTASection

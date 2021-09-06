import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <div className=" bg-gradient-to-r from-green-300 via-green-400 to-purple-700 text-primary-content">
      {/* // <div className="bg-primary"> */}
      <div className="max-w-7xl mx-auto py-12  px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">
          <span className="block">¿Tienes un servicio que quieras publicar?</span>
          <span className="block text-neutral-focus">contactame</span>
        </h2>
        <Link to="/contact" className="btn btn-wide btn-lg bg-primary border-none">
          Contactar
        </Link>
      </div>
    </div>
  )
}

export default CTASection

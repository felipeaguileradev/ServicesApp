import React from 'react'

const CTASection = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-accent text-primary-content">
      {/* // <div className="bg-primary"> */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">
          <span className="block">¿Tienes un servicio que quieras publicar?</span>
          <span className="block text-neutral-focus">contactame</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection

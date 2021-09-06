import { Link } from 'react-router-dom'
import CardService from '../ui/CardService'
import { servicesData } from '../data/dataTest'
// import { useEffect, useState } from 'react'

const ServicesScreen = () => {
  return (
    <>
      <div className="hero h-96 pt-16 overflow-hidden bg-gradient-to-br from-green-300 via-1-sky-500 to-1-teal-500 text-primary-content">
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
      <div className="bg-base-200">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-base-content">
            Productos y Servicios
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {servicesData.map(service => (
              <Link to={`/services/${service.id}`} key={service.id}>
                <CardService
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesScreen

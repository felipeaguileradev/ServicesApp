import CardService from '../ui/CardService'
import { useContext, useEffect, useState } from 'react'
import { ScrollTop } from '../../helpers/ScrollTop'
import { ServicesContext, Services } from '../../context/servicesContext/ServicesContext'
import CardSkeleton from '../ui/CardSkeleton'

const ServicesScreen = () => {
  const {
    servicesState: { dataServices }
  } = useContext(ServicesContext)
  const [services, setServices] = useState<Services[]>()

  useEffect(() => {
    ScrollTop()
  }, [])

  useEffect(() => {
    if (dataServices) {
      const dataFiltered = dataServices.filter(services => services.status)
      setServices(dataFiltered)
    }
  }, [dataServices])

  const dataSkeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <div className="hero h-80 pt-16 overflow-hidden  bg-gradient-to-r from-primary to-accent text-primary-content">
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
          <h2 className="text-5xl font-bold tracking-tight text-base-content text-center mb-20">
            Productos y Servicios
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {!!services && services.length > 0 ? (
              <>
                {services.slice(0, 4).map(service => (
                  <CardService
                    key={service.id}
                    title={service.servicesName}
                    description={service.description}
                    image={service.images[0]?.url}
                    id={service.id}
                    category={service.category}
                  />
                ))}
              </>
            ) : (
              <>
                {dataSkeleton.map(element => (
                  <CardSkeleton key={element} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesScreen

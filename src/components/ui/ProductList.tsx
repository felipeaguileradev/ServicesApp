import CardService from './CardService'
// import { servicesData } from '../data/dataTest'
import { useContext, useEffect, useState } from 'react'
import { ServicesContext, Services } from '../../context/servicesContext/ServicesContext'

const ProductList = () => {
  const {
    servicesState: { dataServices }
  } = useContext(ServicesContext)
  const [services, setServices] = useState<Services[]>()

  const sortData = (data: Services[]) => {
    const datos = data.sort((a, b) => {
      if (a.updatedAt < b.updatedAt) return 1
      if (a.updatedAt > b.updatedAt) return -1

      return 0
    })
    return datos
  }

  useEffect(() => {
    if (dataServices) {
      const dataFiltered = dataServices.filter(services => services.status)
      const orderedData = sortData(dataFiltered)
      const firstFourtElement = orderedData.slice(0, 4)
      setServices(firstFourtElement)
    }
  }, [dataServices])

  return (
    <>
      <div className="py-20 bg-base-200 ">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-base-content text-center mb-20">
            Últimos agregados
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {!!services &&
              services
                .slice(0, 4)
                .map(service => (
                  <CardService
                    key={service.id}
                    title={service.servicesName}
                    description={service.description}
                    image={service.images[0]?.url}
                    id={service.id}
                    category={service.category}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList

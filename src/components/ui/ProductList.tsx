import { Link } from 'react-router-dom'
import CardService from './CardService'
import { servicesData } from '../data/dataTest'

const ProductList = () => {
  return (
    <>
      <div className="py-20 bg-base-200 ">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-base-content text-center mb-20">
            Últimos agregados
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {servicesData.slice(0, 4).map(service => (
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

export default ProductList

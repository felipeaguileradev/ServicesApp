import { Link } from 'react-router-dom'

interface Props {
  title: string
  description: string
  image: string
  id: number
}

//  https://play.tailwindcss.com/bJGtVPu4BT

const CardService = ({ title, description, image, id }: Props) => {
  return (
    <>
      <div className="card bg-base-100 shadow-lg  hover:shadow-2xl group cursor-pointer  transition-all duration-500 ease-in-out transform hover:scale-105 ">
        <div className="card-body p-4 ">
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-400  font-light text-md">{description.slice(0, 30)}...</p>
          {/* <div className="card-actions justify-end">
           <button className="btn btn-secondary">Ver más</button>
          </div> */}
        </div>
        <figure className="group-hover:opacity-75 ">
          <img className="h-56 w-full object-cover  " src={image} />
        </figure>
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
          {/* <h1 className="text-gray-200 font-bold text-xl">Article</h1> */}
          <p className="text-gray-200 text-md font-medium">Servicio</p>
          <Link to={`/services/${id}`} className="btn btn-sm">
            ver más
          </Link>
        </div>
      </div>
      {/* className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded" */}

      {/* <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 font-bold text-3xl uppercase">{title}</h1>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <img className="h-56 w-full object-cover mt-2" src={image} alt={title} />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-gray-200 font-bold text-xl">$129</h1>
          <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
            Add to card
          </button>
        </div>
      </div> */}
    </>
  )
}

export default CardService

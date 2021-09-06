interface Props {
  title: string
  description: string
  image: string
}

// https://play.tailwindcss.com/bJGtVPu4BT

const CardService = ({ title, description, image }: Props) => {
  return (
    <div className="card bg-base-100 shadow-sm  hover:shadow-2xl  group cursor-pointer  transition-all duration-500 ease-in-out transform hover:scale-105 ">
      <figure className="group-hover:opacity-75 ">
        <img className="h-96 w-full object-cover  " src={image} />
      </figure>
      <div className="card-body p-4 ">
        <p className="text-secondary text-md font-medium">Article</p>
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-400  font-light text-md">{description.slice(0, 30)}...</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-secondary">Ver más</button>
        </div> */}
      </div>
    </div>
  )
}

export default CardService

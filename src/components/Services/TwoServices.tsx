interface IInfoData {
  url: string
}
interface IData {
  images: Array<IInfoData>
  servicesName: string
}

interface IProps {
  data: IData
}

const TwoServices = ({ data }: IProps) => {
  return (
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div className="aspect-w-4 aspect-h-2 rounded-lg overflow-hidden lg:block lg:aspect-w-3 lg:aspect-h-4">
        <img
          src={data?.images[0].url}
          alt={data.servicesName}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img
          src={data?.images[1].url}
          alt={data.servicesName}
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  )
}

export default TwoServices

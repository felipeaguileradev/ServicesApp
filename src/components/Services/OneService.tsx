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

const OneService = ({ data }: IProps) => {
  return (
    <div className="mt-6 mx-auto sm:px-6 lg:px-8 ">
      <div className="aspect-w-4 aspect-h-2 rounded-lg overflow-hidden">
        <img
          src={data?.images[0].url}
          alt={data.servicesName}
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  )
}

export default OneService

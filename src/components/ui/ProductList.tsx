import CardService from './CardService'

const servicesData = [
  {
    title: 'Titulo 1',
    description: 'Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  {
    title: 'Titulo 2',
    description:
      'Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.Rerum reiciendis beatae tenetur excepturi aut pariatur est eos',
    image: 'https://www.tailwind-kit.com/images/object/8.jpg'
  },
  {
    title: 'Titulo 3',
    description: 'Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  {
    title: 'Titulo 4',
    description:
      'Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.Rerum reiciendis beatae tenetur excepturi aut pariatur est eos',
    image: 'https://picsum.photos/id/1005/400/250'
  }
]

const ProductList = () => {
  return (
    <>
      <div className="bg-base-200">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Últimos agregados
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {servicesData.map((service, index) => (
              <CardService
                title={service.title}
                description={service.description}
                key={index}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList

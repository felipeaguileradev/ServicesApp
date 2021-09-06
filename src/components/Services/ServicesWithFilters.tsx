import React from 'react'

const ServicesWithFilters = () => {
  return (
    <div className="drawer bg-base-100 pt-16 ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content ">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Servicios</h1>
            {/* BTN ORDENAR */}
            <div className="flex items-center ">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="m-1 btn btn-ghost ">
                  <span>Ordenar</span>
                  <svg
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Más popular</a>
                  </li>
                  <li>
                    <a>Mejor evaluado</a>
                  </li>
                  <li>
                    <a>Nuevo</a>
                  </li>
                  <li>
                    <a>Precio: menor a mayor</a>
                  </li>
                  <li>
                    <a>Precio: mayor a menor</a>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                className="p-2 -m-2 ml-5 sm:ml-7 text-red-400 hover:text-gray-500"
              >
                <span className="sr-only">View grid</span>
                {/* <!-- Heroicon name: solid/view-grid --> */}
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <label
                htmlFor="my-drawer-3"
                className="p-2 -m-2 ml-4 sm:ml-6 text-red-400 hover:text-gray-500 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                {/* <!-- Heroicon name: solid/filter --> */}
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* filtros laterales */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
                >
                  <li>
                    <a href="#">Totes</a>
                  </li>

                  <li>
                    <a href="#">Backpacks</a>
                  </li>

                  <li>
                    <a href="#">Travel Bags</a>
                  </li>

                  <li>
                    <a href="#">Hip Bags</a>
                  </li>

                  <li>
                    <a href="#">Laptop Sleeves</a>
                  </li>
                </ul>

                {/* TODO: probando */}
                <div className="collapse border rounded-box  border-base-100 collapse-plus">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">Categorías</div>
                  <div className="collapse-content">
                    {/* opciones */}
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">Comida</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">Deportes</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">Ropa</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">Servicios</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="collapse border rounded-box  border-base-100 collapse-plus">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">Tamaño</div>
                  <div className="collapse-content">
                    {/* opciones */}
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">20L</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">20L</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">20L</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">20L</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="collapse border rounded-box  border-base-100 collapse-plus">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">Color</div>
                  <div className="collapse-content">
                    {/* opciones */}
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">Rojo</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">Verde</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">Azul</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                        <span className="label-text">Amarillo</span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>

              {/* <!-- Product grid --> */}
              <div className="lg:col-span-3">
                {/* <!-- Replace with your content --> */}
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
                  test
                </div>
                {/* <!-- /End replace --> */}
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* menu lateral movile */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="p-4 overflow-y-auto menu w-80 bg-base-100 ">
          {/* opciones */}
          <div className="px-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
            <label
              htmlFor="my-drawer-3"
              className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <form className="mt-4 border-t border-gray-200">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="font-medium text-gray-900 px-2 py-3">
              <li>
                <a href="#" className="block px-2 py-3">
                  Totes
                </a>
              </li>

              <li>
                <a href="#" className="block px-2 py-3">
                  Backpacks
                </a>
              </li>

              <li>
                <a href="#" className="block px-2 py-3">
                  Travel Bags
                </a>
              </li>

              <li>
                <a href="#" className="block px-2 py-3">
                  Hip Bags
                </a>
              </li>

              <li>
                <a href="#" className="block px-2 py-3">
                  Laptop Sleeves
                </a>
              </li>
            </ul>

            <div className="collapse border rounded-box  border-base-100 collapse-plus">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Categorías</div>
              <div className="collapse-content">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">Comida</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">Deportes</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">Ropa</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">Servicios</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="collapse border rounded-box  border-base-100 collapse-plus">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Tamaño</div>
              <div className="collapse-content">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">20L</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">20L</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">20L</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">20L</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="collapse border rounded-box  border-base-100 collapse-plus">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Color</div>
              <div className="collapse-content">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">Rojo</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">Verde</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">Azul</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                    <span className="label-text">Amarillo</span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ServicesWithFilters

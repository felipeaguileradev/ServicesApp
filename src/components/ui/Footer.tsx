import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-base-300">
      <div className="p-10 bg-base-300 text-base-content rounded-t-box ">
        <div className="container mx-auto footer grid-cols-2 ">
          <div>
            <span className="footer-title">Servicios</span>
            <a
              href="https://felipeaguileradev.com/"
              target="_blank"
              className="link link-hover"
              rel="noreferrer"
            >
              Desarrollo de Software
            </a>
            <a
              href="https://felipeaguileradev.com"
              rel="noreferrer"
              target="_blank"
              className="link link-hover"
            >
              Desarrollo Web
            </a>
            <a
              href="https://felipeaguileradev.com"
              rel="noreferrer"
              target="_blank"
              className="link link-hover"
            >
              Desarrollo de Plataformas
            </a>
            <a
              href="https://felipeaguileradev.com"
              rel="noreferrer"
              target="_blank"
              className="link link-hover"
            >
              Desarrollo Aplicaciones Móviles
            </a>
          </div>
          <div>
            <span className="footer-title">Compañia</span>
            <a
              href="https://felipeaguileradev.com"
              rel="noreferrer"
              target="_blank"
              className="link link-hover"
            >
              Sobre mí
            </a>
            <Link to="/contact" className="link link-hover">
              Contacto
            </Link>
            <a
              href="https://felipeaguileradev.com"
              rel="noreferrer"
              target="_blank"
              className="link link-hover"
            >
              Trabajos
            </a>
          </div>

          {/* <div className="w-full">
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  placeholder="username@site.com"
                  className="w-full pr-16 input input-bordered"
                />
                <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="px-10 py-4 border-t bg-base-300 text-base-content border-base-100 rounded-b-box">
        <div className="container mx-auto footer">
          <div className="flex items-center">
            <figure>
              <img
                src="https://felipeaguileradev.com/static/media/Recurso2.6f19d518.svg"
                alt="logo felipe aguilera dev"
                height={36}
                width={36}
              />
            </figure>
            <p>Felipe Aguilera Desarrollador</p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com/FelipeA_0703" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC9Z71npeh9XvNAIRwTs7WJw"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/felipe.aguileragonzalez.9/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-aguilera-gonzalez-806201168/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

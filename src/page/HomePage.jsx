import React from 'react'
import { Link } from 'react-router-dom'
import { RecentWorkGrid } from '../component/RecentWorkGrid'
import { SkillsGridCard } from '../component/SkillsGridCard'
import { TimeLine } from '../component/TimeLine'
import ExperienciaGrid from '../component/ExperienciaGrid'
import { Header } from '../layout/Header'

import foto_perfil from '../../public/images/sphere.gif'
import { Footer } from '../layout/Footer'

export const HomePage = () => {
  return (
    <>
      {/* <Header/> */}
      <div className="container px-md-1 px-4">
        <div className="row align-items-center" style={{ height: 100 + "vh" }}>
          <div className="col-md-6">
            <div className="iam">
              <h1 className="text-white fw-bold saira">
                <span>FELIPE</span> CASTRO
              </h1>
              <h1>DESARROLLADOR WEB</h1>
            </div>
            <div className="descrip">
              <p>
                Soy un ingeniero físico que conoció y se apasionó por el
                desarrollo web. Llevo más de 3 años aprendiendo y desarrollando
                proyectos en esta área. Me enfoco en el desarrollo frontend.
                Tengo experiencia contruyendo landing page e E-commerce en
                WordPress. También he particiado en la maquetación de proyectos
                en otras tecnologías.
              </p>
              <p>
                Contáctatame y conoce más a cerca de como puedo aportar valor y
                ayudarte a realizar a tus proyectos
              </p>
            </div>
            <div className="row mt-5 links">
              <div className="col-auto">
                <a
                  className="border border-1  py-2 px-4 "
                  href="https://api.whatsapp.com/send/?phone=%2B5731773418&text&type=phone_number&app_absent=0"
                >
                  {/* <i className="bi bi-airplane me-2"></i> */}
                  <span>CONTÁCTAME</span>
                </a>
              </div>
              <div className="col-auto">
                <a
                  href="#trabajos-recientes"
                  className="border border-1 py-2 px-4"
                >
                  {/* <i className="fa-regular fa-angles-down me-2"></i> */}
                  <span>PORTAFOLIO</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-fluid mx-5 animate__animated animate__backInRight">
              <img
                className="foto-principal"
                width="100%"
                src={foto_perfil}
                alt="Foto personal"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 px-md-1 px-4">
        <h3 className="saira text-center">HABILIDADES</h3>
      </div>
      <SkillsGridCard />
      <div className="encabezado container my-5 px-md-1 px-4">
        <h1 id="trabajos-recientes" className="saira text-center">
          DESARROLLOS DESTACADOS
        </h1>
      </div>
      <RecentWorkGrid />
      <div className="container mb-5 px-md-1 px-4">
        <div className="row text-center border p-1 mb-5 mx-0">
          <Link className="saira color-titulos " to="/desarrollos">
            VER MÁS
          </Link>
        </div>
      </div>
      <div className="encabezado container my-5 px-md-1 px-4">
        <h1 className="saira text-center">EXPERIENCIA LABORAL</h1>
      </div>
      <ExperienciaGrid />
      <div className="encabezado container my-5 px-md-1 px-4">
        <h1 className="saira text-center">FORMACIÓN ACADÉMICA</h1>
      </div>
      <TimeLine />
      <Footer />
    </>
  );
}



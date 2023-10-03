import React from 'react';
import { Link } from 'react-router-dom';


const ExperienciaGrid = () => {
    return (
        <>
        <div className='container px-md-1 px-4'>
            <div className='row'>
                <div className="col-md-6 mb-5">
                    <div className="wraper-experiencia">
                        <div className="header">
                            <h3>
                                <a href="https://yolehagolaweb.com/" target='_blank' className='text-decoration-underline'>@YoLeHagoLaWeb</a>
                            </h3>
                            <h3>2020-2022</h3>
                        </div>
                        <div className="descripcion px-3">
                            <h4 className='text-center my-3 sub-title'>Funciones desarrolladas</h4>
                            <ul className="list-style">
                                <li><i class="bi bi-check2"></i> Maquetar sitios web en WordPres</li>
                                <li><i class="bi bi-check2"></i> Crear diseños a medida con HTML, CSS, jQuery y JS en WordPress</li>
                                <li><i class="bi bi-check2"></i> Crear E-Commerce con Woccommerce</li>
                                <li><i class="bi bi-check2"></i> Proponer diseños para sitios web</li>
                                <li><i class="bi bi-check2"></i> Levantar requerimientos del cliente</li>
                                <li><i class="bi bi-check2"></i> Realizar maquetas en HTML, CSS, JS y jQuery puro</li>
                                <li><i class="bi bi-check2"></i> Investigación e implementación de funcionaidades avanzadas a través de plugins</li>
                                <li><i class="bi bi-check2"></i> Implementar optimización de sitios con PageSpeed de Google</li>
                                <li><i class="bi bi-check2"></i> Implementaciones de SEO</li>
                                <li><i class="bi bi-check2"></i> Implementaciones de seguridad para WordPress</li>
                                <li><i class="bi bi-check2"></i> Manejo de Cpanel</li>
                            </ul>
                            <div className='text-center py-3 animate__animated animate__fadeInUp animate__delay-2s'>
                                <Link className='saira color-titulos text-decoration-underline' to='/desarrollos-yolehagolaweb'>
                                    VER TRABAJOS REALIZADOS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-5">
                    <div className="wraper-experiencia">
                        <div className="header">
                            <h3>
                                <a href="https://igniweb.com" target='_blank' className='text-decoration-underline'>IGNIWEB S.A.S</a>
                            </h3>
                            <h3>2022-Actualidad</h3>
                        </div>
                        <div className="descripcion px-3">
                            <h4 className='text-center my-3 sub-title'>Funciones desarrolladas</h4>
                            <ul className="list-style">
                                <li><i class="bi bi-check2"></i> Liderar proyectos en WordPress</li>
                                <li><i class="bi bi-check2"></i> Despliegue de WordPress en servidor</li>
                                <li><i class="bi bi-check2"></i> Desarrollo de sitio gubernamentales</li>
                                <li><i class="bi bi-check2"></i> Implementación de lineamientos MINTIC</li>
                                <li><i class="bi bi-check2"></i> Instalación de SSL</li>
                                <li><i class="bi bi-check2"></i> Implementación de funcionalidades avanzadas en WordPress</li>
                                <li><i class="bi bi-check2"></i> Personalizaciones a través de Theme Child</li>
                                <li><i class="bi bi-check2"></i> Maquetas a medida con HTML, CSS, JS, jQuery y bootstrap</li>
                                <li><i class="bi bi-check2"></i> Administración de E-commerce</li>
                                <li><i class="bi bi-check2"></i> Maquetación de sitios web en WordPress a partir de un diseño</li>
                                <li><i class="bi bi-check2"></i> Documentación de proyectos</li>
                                <li><i class="bi bi-check2"></i> Implementaciones de seguridad y SEO</li>
                                <li><i class="bi bi-check2"></i> Mantenimiento y optimización de sitio existentes</li>
                                <li><i class="bi bi-check2"></i> Creación y restauración de copias de seguridad</li>
                                <li><i class="bi bi-check2"></i> Manejo de Hooks de WordPress</li>
                                <li><i class="bi bi-check2"></i> Implementación de Google Analytics y Google Search Console</li>
                                <li><i class="bi bi-check2"></i> ...</li>
                            </ul>
                            <div className='text-center py-3 animate__animated animate__fadeInUp animate__delay-2s'>
                                <Link className='saira color-titulos text-decoration-underline' to='/desarrollos-igniweb'>
                                    VER TRABAJOS REALIZADOS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default ExperienciaGrid;

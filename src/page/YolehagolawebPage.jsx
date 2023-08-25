import { WorkGrid } from "../component/WorkGrid";
import {yolehagolawebWorkList} from '../data/yolehagolawebWorks';
import { Header } from "../layout/Header";

export const YolehagolawebPage = () => {
    return (
        <>
            <Header/>
           
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="iam">
                            <h1 className="text-white fw-bold saira"><span>@YOLEHAGOLAWEB</span></h1>
                            <h1>DESARROLLADOR WEB</h1>
                        </div>
                        <div className="descrip">
                            <p>Empresa de la ciudad de Pereira donde recibi mi prima oportunidad en el mundo del desarrollo web. Allí tuve mis primero encuentros con el desarrollo Frontend y WordPress. <br/>
                            Acargo de un apasiondo ingeniero de sistemas que me enseño muy bunas bases del desarrollo web y con quien tuve la oportunidad de trabajar por cerca de dos años realizando muchos proyectos. 
                            </p>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="w-100 m-auto animate__animated animate__backInRight">
                            <a href="https://yolehagolaweb.com/">
                            <img className="" width="100%" src='/public/images/logo-ylw-completo-blanco-e1650988602668.webp' alt="Foto personal"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="container my-5">
                <h3 className="saira text-center color-titulos">ALGUNOS PROYECTOS REALIZADOS</h3>
                <p className="text-center color-p">los trabajos acontinuación estan sujetos a cambios por parte de los clientes, asi como de su continuidad en internet.</p>
            </div>
            <WorkGrid data={yolehagolawebWorkList}/>
        </>
    );
}

 

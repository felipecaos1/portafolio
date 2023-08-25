import { WorkGrid } from "../component/WorkGrid";
import { igniwebWorkList } from "../data/igniwebWorks";
import { Header } from "../layout/Header";

export const IgniwebPage = () => {
    return (
        <>
            <Header/>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="iam">
                            <h1 className="text-white fw-bold saira"><span>IGNIWEB S.A.S</span></h1>
                            <h1>DESARROLLADOR WEB</h1>
                        </div>
                        <div className="descrip">
                            <p>Empresa de la ciudad de Armenia donde actualmente laboro y donde he afianzado habilidades en desarrollo frontend pero también me he visto enfrentado a desafios backend, por lo que he adquirido conocimientos en PHP. <br/>
                            Actualmente soy el encargado de los proyectos en WordPress, lidero proyectos para sitios web corporativos, E-commerce y landing page.  
                            </p>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="w-100 text-center m-auto animate__animated animate__backInRight">
                            <a href="https://igniweb.com/">
                            <img className="" width="70%" src='./images/Igniweb-logo-1.png' alt="Foto personal"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="container my-5">
                <h3 className="saira text-center color-titulos">ALGUNOS PROYECTOS REALIZADOS</h3>
                <p className="text-center color-p">los trabajos acontinuación estan sujetos a cambios por parte de los clientes, asi como de su continuidad en internet.</p>
            </div>
            <WorkGrid data={igniwebWorkList}/>
        </>
    );
}

 

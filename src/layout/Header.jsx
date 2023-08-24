import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
         <div className="container nav-bar py-4 sticky-top "> 
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="d-flex align-items-center">
                        <Link to={"/"}>
                            <h1 className="text-white fw-bold saira m-0"><span>FELIPE</span> CASTRO</h1>
                        </Link>
                        <h2 className="text-white fw-bold saira ms-3 m-0">Desarrollador Web</h2>
                    </div>
                </div>
                <div className="col-md-6 text-end btn-con">
                    <a  className="  py-2 px-4 " href="https://api.whatsapp.com/send/?phone=%2B5731773418&text&type=phone_number&app_absent=0">
                        <span>CONTÁCTAME</span>
                    </a>
                </div>
            </div>
            
        </div>
        </>
            
    );
}


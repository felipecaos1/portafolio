import { Header } from "../layout/Header";
import { igniwebWorkList } from "../data/igniwebWorks";
import { yolehagolawebWorkList } from "../data/yolehagolawebWorks";

import { WorkGrid } from "../component/WorkGrid";

const allWorks =  yolehagolawebWorkList.concat(igniwebWorkList);


export const DesarrollosPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="encabezado container my-5 px-md-1 px-4">
          <h1 id="trabajos-recientes" className="saira text-center">
            DESARROLLOS DESTACADOS
          </h1>
          <p className="text-center color-p">
            los trabajos acontinuación estan sujetos a cambios por parte de los
            clientes, asi como de su continuidad en internet.
          </p>
        </div>
        <WorkGrid data={allWorks} />
        {/* <WorkGrid data={yolehagolawebWorkList} /> */}
      </div>
    </>
  ); 
}
 

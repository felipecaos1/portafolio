
export const WorkItem = ({name, description, external_url,img}) => {
    return (
        <>
            <div className="col-md-4 my-4">
                <div className="card-wordpres">
                    <div className="wraper-imagen">
                        <a href={external_url} target="_blank">
                            <img width="100%" src={img} alt=""/>
                        </a>
                    </div>
                    <div className="content mt-3">
                        <h1 className="saira">{name}</h1>
                        <p>{description}</p>
                        <a className="flecha" href={external_url} target="_blank"><span  className="text-decoration-underline ">Ver sitio </span></a>
                    </div>
                </div>
            </div>
        </>
    );
}

 

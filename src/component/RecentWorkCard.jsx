import React from 'react';

import { hover } from '../page/helpers/cardHover';


const RecentWorkCard = ({categorie, name, description, img, external_url}) => {
  return (
    <>
       <div className="col-md-4 ">
                <div className="baner" onMouseOver={hover} onMouseOut={hover}>
                    <div className="baner-imagen">
                        <img width="100%" src={img} alt=""/>
                    </div>
                    <div className="baner-content">
                        <a className="baner-link" target="_blank" href={external_url}></a>
                        <div className="baner-content-inner">
                            <div className="baner-move">
                                <h5>{categorie}</h5>
                                <h1 className="saira">{name}</h1>
                                <div className="text-holder">
                                    <p>{description}</p>
                                    <div className="btn-finaly">
                                        <a href={external_url} target="_blank"><span  className="text-decoration-underline">VER TRABAJO →</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default RecentWorkCard

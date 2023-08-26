import React from "react";
// import "./timeLine.css";
import {estudiosList} from '../data/estudiosList';
import { TimeLineItem } from "./TimeLineItem";

export const TimeLine = () => {
  return (
    <>
      <div className="container mb-5 px-md-1 px-4" id="time-wraper">
        <div className="linea-tiempo">
          {
            estudiosList.map( item =>(
              <TimeLineItem key={item.id} {...item} description={item.description}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

import React from "react";
import "./synonyms.css";

export default function Synonyms(props) {
  if (Array.isArray(props.synonyms) && props.synonyms.length) {
    return (
      <div className="row">
        <div className="col-md-2 col-lg-2">
          <h6 className="text-md-end text-lg-end text-sm-start mt-2 me-1">
            synonyms
          </h6>
        </div>
        <div className="col">
          {props.synonyms.map(function (synonyms, index) {
            return (
              <div className="synonyms" key={index}>
                <i>{synonyms}</i>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

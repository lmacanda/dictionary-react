import React from "react";
import "./synonyms.css";

export default function Synonyms(props) {
  if (Array.isArray(props.synonyms) && props.synonyms.length) {
    return (
      <div className="container container__synonyms">
        <div className="row">
          <div className="col-2 border">
            <h6 className="text-end mt-2">Synonyms</h6>
          </div>
          <div className="col border">
            {props.synonyms.map(function (synonyms, index) {
              return (
                <div className="synonyms" key={index}>
                  <i>{synonyms}</i>
                </div>
              );
            })}
          </div>
        </div>
        <br />
      </div>
    );
  } else {
    return null;
  }
}

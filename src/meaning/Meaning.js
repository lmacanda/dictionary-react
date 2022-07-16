import React from "react";
import Synonyms from "../synonyms/Synonyms";

export default function Meaning(props) {
  return (
    <div className="container__meaning">
      <div className="row row__meaning">
        <div className="col-md-2 col-lg-2 col-sm-12 col__partOfSpeech">
          <h6 className="text-md-end text-lg-end text-sm-start mt-2 me-1">
            {props.meaning.partOfSpeech}
          </h6>
        </div>
        <div className="col col__meaning">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div className="mb-3 mt-2" key={index}>
                {definition.definition}
                <br />
                <small>
                  <em>{definition.example}</em>
                </small>
              </div>
            );
          })}
        </div>
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
    </div>
  );
}

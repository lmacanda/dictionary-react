import React from "react";
import "./meaning.css";
import Synonyms from "../synonyms/Synonyms";

export default function Meaning(props) {
  return (
    <div className="container container__meaning">
      <div className="row row__meaning">
        <div className="col-2 col__partOfSpeech frame">
          <h6 className="text-end mt-2">{props.meaning.partOfSpeech}</h6>
        </div>
        <div className="col col__meaning frame">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div className="mb-2 mt-2" key={index}>
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
      <div className="row">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
      <br />
    </div>
  );
}

import React from "react";
import "./meaning.css";
import Synonyms from "../synonyms/Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="container container__meaning">
      <div className="row row__meaning">
        <div className="col-2 col__partOfSpeech border">
          <h6 className="text-end mt-2">{props.meaning.partOfSpeech}</h6>
        </div>
        <div className="col col__meaning border">
          {props.meaning.definitions.map(function (definition, index) {
            console.log(definition);
            return (
              <div className="mb-2 mt-2" key={index}>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}

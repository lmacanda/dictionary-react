import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="container__meaning">
      <h1>{props.meaning.partOfSpeech}</h1>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}

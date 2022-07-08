import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
import WordInfo from "../WordInfo";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="row row__main pt-3 justify-content-center">
      <div className="col-8">
        <p className="text-end">Are You Looking for a word?</p>
      </div>
      <div className="col-4">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word"
            id="word"
            aria-label="search"
            autoFocus="on"
            onChange={handleKeywordChange}
          />
        </form>
      </div>
      <WordInfo />
    </div>
  );
}

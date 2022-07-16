import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
import WordInfo from "../WordInfo";
import Photos from "../Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [wordInfo, setWordInfo] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    //console.log(response.data[0]);
    setWordInfo(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000110967cfc0fe44dca947a95e8b906bfdb";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="row row__main pt-5 justify-content-center">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <h2 className="text-md-end text-lg-end text-sm-center fs-3">
            Looking for a Word?
          </h2>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 align-self-center">
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
        <WordInfo wordInfo={wordInfo} />
      </div>
      <Photos photos={photos} />
    </div>
  );
}

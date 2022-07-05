import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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
    </div>
  );
}
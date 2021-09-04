import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword,setKeyword]= useState(null);
    let [results,setResults]= useState(null);

    function handleResponse(response){
      setResults(response.data[0]);
    
    }
    
    function search(event){
      event.preventDefault();
      //documentation:https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
    event.preventDefault();
   
    setKeyword(event.target.value);    
    }
    

    return (
      <div className="Dictionary">
        <section>
        <form className="d-flex justify-content-center" onSubmit={search}>
          <div className="col-sm-6">
            <input
              className="form-control"
              type="search"
              onChange={handleKeywordChange}
            ></input>
          </div>
        </form>
        </section>
        <Results results={results} />
      </div>
    );
}
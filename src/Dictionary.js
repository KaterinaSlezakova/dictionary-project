import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword,setKeyword]= useState("null");
    let [results,setResults]= useState("null");

    function handleResponse(response){
      setResults(response.data[0]);


      //word: response.data[0].word,
     //definition: response.data[0].meanings[0].definitions[0].definition,
      //partOfSpeech: response.data[0].meanings[3].partOfSpeech,
      //phonetic: response.data[0].phonetics[0].text,
      //audio: response.data[0].phonetics[0].audio,
    
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
        <form className="" onSubmit={search}>
          <input
            className="form-control form-control-lg"
            type="search"
            onChange={handleKeywordChange}
          ></input>
        </form>
        <Results results={results} />
      </div>
    );
}
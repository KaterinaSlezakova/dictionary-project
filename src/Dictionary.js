import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword,setKeyword]= useState(props.defaultKeyword);
    let [results,setResults]= useState(null);
    let [loaded,setLoaded] = useState(false);

    function handleResponse(response){
      setResults(response.data[0]);
    
    }
    function search() {
      //documentation:https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event){
      event.preventDefault();
      search();
    }

    function handleKeywordChange(event){
    setKeyword(event.target.value);    
    }
    function load(){
      setLoaded(true);
      search();
    }

    if (loaded) {
     return (
       <div className="Dictionary">
         <section>
           <form
             className="d-flex justify-content-center"
             onSubmit={handleSubmit}
           >
             <div className="col-sm-6">
               <input
                 className="form-control form-control-lg"
                 type="search"
                 onChange={handleKeywordChange}
               ></input>
             </div>
           </form>
           <div className="hint">
             suggested words: sunset, book, phone, wine...
           </div>
         </section>
         <Results results={results} />
       </div>
     ); 
    } else{
      load();
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }
    
}
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Loader from "react-loader-spinner";
import Photos from "./Photos";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword,setKeyword]= useState(props.defaultKeyword);
    let [results,setResults]= useState(null);
    let [loaded,setLoaded] = useState(false);
    let [photos,setPhotos] = useState(null);

    function handleDictionaryResponse(response){
      setResults(response.data[0]);
    }
    function handlePexelsResponse(response) {
      setPhotos(response.data.photos)
     }

    function search() {
      //documentation:https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleDictionaryResponse);

      let pexelsApiKey = "563492ad6f91700001000001326d54778a5144ff8db5ce6324a7c7ff";
      let pexelsApiUrl =
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
      let headers = { Authorization: `Bearer ${pexelsApiKey}` };
      axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse)
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
           <h1>What word do you want to look up?</h1>
           <form
             className="d-flex justify-content-center"
             onSubmit={handleSubmit}
           >
             <div className="col-sm-6">
               <input
                 className="form-control form-control-lg"
                 type="search"
                 onChange={handleKeywordChange}
                 defaultValue={props.defaultKeyword}
               ></input>
             </div>
           </form>
           <div className="hint">
             suggested words: sunset, book, phone, wine...
           </div>
         </section>
         <Results results={results} />
         <Photos photos={photos} />
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
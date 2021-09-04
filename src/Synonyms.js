import React from "react";

export default function Synonyms(props){
    if (props.synonyms){
    return (
        <div className="Synonyms my-2">
            {props.synonyms.map(function(synonym,index){
                return (
                  <ul>
                    <li key={index}>{synonym}</li>
                  </ul>
                );
            })}
        </div>
    )
    } else {
        return null;
    }
}
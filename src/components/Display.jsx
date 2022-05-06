import React from "react";
import { useState, useEffect } from "react";

export default function Display(props) {
    const [url, setURL] = useState("");
    const [MEME_DATA, setMEME_DATA] = useState({});
    
    useEffect(() => {
        async function getMemes() {
            const response = await fetch(`https://api.imgflip.com/get_memes`);
            const result = await response.json();
            setMEME_DATA(result.data.memes)
        }
    
        getMemes();
    }, [])

    function memeChoice() {
        const memeArray = MEME_DATA;
        let randomNum = Math.floor(Math.random() * 101);
        setURL(memeArray[randomNum].url);
    }

    return (
        <div>
            <div id="btn-parent">
                <button id="get-meme" onClick={memeChoice}>Get a new meme image <i className="material-icons">image</i></button>
            </div>
            <section id="display-container">
                <h1>{props.input1}</h1>
                <img src={`${url}`} alt="meme" />
                <h1>{props.input2}</h1>
            </section>
        </div>
        
    )
}
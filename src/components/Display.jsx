import React from "react";
import { MEME_DATA } from "../memeData";

export default function Display() {
    const [url, setURL] = React.useState("");

    function memeChoice() {
            const memeArray = MEME_DATA.data.memes;
            let randomNum = Math.floor(Math.random() * 101);
            
            setURL(memeArray[randomNum].url);
    }

    return (
        <div>
            <div id="btn-parent">
                <button onClick={memeChoice} id="get-meme">Get a new meme image <i className="material-icons">image</i></button>
            </div>
            <section id="display-container">
                <h1>Hello</h1>
                <img src={`${url}`} alt="meme" />
                <h1>Mate</h1>
            </section>
        </div>
        
    )
}
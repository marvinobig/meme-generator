import { MEME_DATA } from "../memeData";

let image;

function memeChoice() {
    let num = Math.floor(Math.random() * 101);
    image = MEME_DATA.data.memes[num].url;
    console.log(image)
}

function Btn() {
    return (
        <div id="btn-parent">
            <button onClick={memeChoice} id="get-meme">Get a new meme image <i className="material-icons">image</i></button>
        </div>
    )
}

export { Btn, image};
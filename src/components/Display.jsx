export default function Display(props) {
    return (
        <section id="display-container">
            <img src={props.image} alt="meme" />
            <h1 className="top-meme-text">{props.topText}</h1>
            <h1 className="bottom-meme-text">{props.bottomText}</h1>
        </section>
    )
}
import { image } from "./Btn"

export default function Display() {
    return (
        <section id="display-container">
            <h1>Hello</h1>
            <img src={`${image}`} alt="meme" />
            <h1>Mate</h1>
        </section>
    )
}
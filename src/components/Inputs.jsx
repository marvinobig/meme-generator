import Btn from "./Btn"

export default function Inputs() {
    return (
        <section id="input-container">
            <div id="row-1">
                <input id="top-text" type="text" />
                <input id="bottom-text" type="text" />
            </div>
            <Btn />
        </section>
    )
}
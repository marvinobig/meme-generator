export default function Inputs(props) {
    function handleFirstInput(e) {
        props.setInput1(e.target.value)
    }

    function handleSecondInput(e) {
        props.setInput2(e.target.value)
    }

    return (
        <section id="input-container">
            <div id="row-1">
                <input id="top-text" type="text" placeholder="Top Text" value={props.input1.value} onChange={handleFirstInput}/>
                <input id="bottom-text" type="text" placeholder="Bottom Text" value={props.input2.value} onChange={handleSecondInput}/>
            </div>
        </section>
    )
}
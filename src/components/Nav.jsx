import logo from "../assets/troll-face.png";

export default function Nav() {
    return (
        <nav id="nav-bar">
            <div id="left">
                <img src={logo} alt="troll face" id="troll" />
                <h1>Marvin Obig</h1>
            </div>
            <h1>Meme Generator</h1>
        </nav>
    )
}
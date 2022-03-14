import Display from "./components/Display"

const MEMES = []

const MEME_DISPLAY = MEMES.map( (meme) => {
    return (
        <Display 
            {...meme}
        />
    )
})
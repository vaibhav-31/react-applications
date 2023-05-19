import './PlayButton.css';
import { useState, memo } from 'react';

function PlayButton ({onPlay,onPause,children}) {
    const [playing, setPlaying] = useState(false);
    function handleClick() {
        if(playing) {
            onPause();
        } else {
            onPlay();
        }
        
        setPlaying(!playing);
    }

    return (
        <button onClick={handleClick}>{children} : {playing?'⏸️':'⏯️' }</button>
    )
}

export default memo(PlayButton);
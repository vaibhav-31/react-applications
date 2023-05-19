import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideo from "../hooks/Video";
import axios from 'axios';

function  VideoList({editVideo}) {
    const url ="https://my.api.mockaroo.com/video.json?key=2a12c4d0"

    const videos = useVideo();

   async function handleClick () {
        const res = await axios.get(url);
        console.log('get Videos',res.data);
    }

    return (
        <>
        {
            videos.map(video => <Video key={video.id} id={video.id} title={video.title} channel={video.channel} verified={video.verified}  editVideo={editVideo}>
                <PlayButton onPlay={() => console.log('play', video.title)} onPause={() => console.log('pause')}>{video.title}</PlayButton>
            </Video>)

        }
        <button onClick={handleClick}>Get Videos</button>
        </>

    )
}

export default VideoList;
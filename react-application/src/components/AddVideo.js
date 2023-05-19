import { useState, useEffect } from 'react';
import './AddVideo.css';
import useVideoDispatch from '../hooks/VideoDispatch';

const initialState = {
    channel: 'Coder Dost',
    verified: true,
    title: '',
}

function AddVideo({editableVideo }) {

    const [video, setVideo] = useState(initialState);
     
    const dispatch = useVideoDispatch();
    

    function handleSubmit(e) {
        e.preventDefault();
        if(editableVideo) {
            dispatch({ type: 'UPDATE', payload: video })
        } else {
            dispatch({ type: 'ADD', payload: video }) 
        }
        setVideo(initialState);

    }

    function handleChange(e) {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
    }, [editableVideo])

    return (
        <form>
            <input type="text" name="title" onChange={handleChange} placeholder='title' value={video.title} />
            <button onClick={handleSubmit}>{editableVideo?'Edit':'Add'} Video</button>
        </form>
    )
}

export default AddVideo;
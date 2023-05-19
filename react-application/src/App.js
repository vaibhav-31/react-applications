import './App.css';
import videoDB from './data/data';
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from './context/ThemeContext';
import VideoContext from './context/VideoContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import Counter from './components/Counter';

function App() {

  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState('light');

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...videos,
          { ...action.payload, id: videos.length + 1 }
        ]
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)
      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        setEditableVideo(null);
        return newVideos;

      default:
        return videos
    }

  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id))
  }


  return (
    <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`}>
            <Counter />
            <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>Mode</button>
            <AddVideo editableVideo={editableVideo} />
            <VideoList editVideo={editVideo} />
          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider >
  )
}

export default App;
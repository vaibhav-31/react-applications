import { useContext } from "react";
import VideoContext from "../context/VideoContext";

function useVideo() {
    return useContext(VideoContext);

}



export default useVideo;
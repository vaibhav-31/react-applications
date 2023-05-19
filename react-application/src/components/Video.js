import './Video.css';
import useVideoDispatch from '../hooks/VideoDispatch';

function Video({ id, title, channel, verified, children, editVideo }) {
     let bg = 'dark';
    const dispatch = useVideoDispatch();
    

    return (
        <>
            <div className='container'>
            <button className='close' onClick={()=>dispatch({ type: 'DELETE', payload: id })}>X</button>
            <button className='edit' onClick={()=>editVideo(id)}>Edit</button>

            <img src={`https://picsum.photos/id/${id}/160/90`} alt=""></img>
            <div className={bg} style={{ background: 'red' }}>{title}</div>
            <div className="channel">{channel} {verified ? '✅' : null}</div>
            <div>{children}</div>
            </div>
        </>
    )
}

export default Video;


import React from 'react';
const videoSource1 ='http://localhost:5000/video/stream?video=champion.mp4';
const videoSource2 ='http://localhost:5000/video/stream?video=drag-me-down.mp4';
const Video = () => 
        <div>
            <video width='550' height='300' controls autoplay>
            <source src={videoSource1} type='video/mp4'/>
            </video> 
        </div>


export default Video;
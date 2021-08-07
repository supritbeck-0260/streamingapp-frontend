import React from 'react';
const Video = ({path}) => 
        <div>
            <video width='550' height='300' controls autoplay>
            <source src={path} type='video/mp4'/>
            </video> 
        </div>


export default Video;
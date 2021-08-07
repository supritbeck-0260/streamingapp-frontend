import React from 'react';
import '../Css/audio.css';
const Audio = ({path,name}) => {
    return (
        <div className='col-lg-3 col-md-3 col-sm-12'>
            <div className='row p-3 audio_card'>
                <div className='col-12 col-md-12 col-sm-12 d-flex justify-content-center'>
                    <img src='/images/play.png' width='70%' alt='play'/>
                </div>
                <div className='col-12 col-md-12 col-sm-12'>{name}</div>
                <div className='col-12 col-md-12 col-sm-12'>
                    <audio controls preload="none" style={{width:'100%'}}>
                        <source src={path} type="audio/mpeg" />
                    </audio>
                </div>
            </div>
       </div>
    );
};

export default Audio;
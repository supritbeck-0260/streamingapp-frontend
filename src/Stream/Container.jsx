import React, { useEffect , useState } from 'react';
import Audio from './Audio';
import '../Css/Container.css';
import { getAudio } from '../HttpRequests/getAudio';

const Container = () => {
    const [audioFiles,setAudioFiles] = useState(null);
    useEffect(()=>
        getAudio()
            .then(data=>setAudioFiles(data))
    ,[]);
    return (
        <>
        {audioFiles &&
        <div className='row mx-0 d-flex justify-content-center align-items-center'>
            <div className="audio_container m-5 col-lg-6 col-md-12 col-sm-12">
                <div></div>
                 {audioFiles.map((audio,index)=> <Audio key={index} path={audio.path} name={audio.name}/>)}
            </div>   
        </div>}
             
        </>
    );
};

export default Container;
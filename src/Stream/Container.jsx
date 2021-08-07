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
                <div className="audio_container p-5 row m-0 d-flex justify-content-around">
                    {audioFiles.map((audio,index)=> <Audio key={index} path={audio.path} name={audio.name}/>)}
                </div>   
            }  
        </>
    );
};

export default Container;
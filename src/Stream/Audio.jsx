import React from 'react';
const Audio = ({path,name}) => {
    return (
        <>
        <div className='row p-3 m-3'>
            <span>{name}</span>
            <audio controls>
                <source src={path} type="audio/mpeg" />
            </audio>
        </div>
       </>
    );
};

export default Audio;
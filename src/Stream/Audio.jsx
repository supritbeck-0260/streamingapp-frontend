import React from 'react';
const Audio = ({path,name}) => {
    return (
        <>
        <div className='row p-3 m-3'>
            <div className='col-12 col-md-12 col-sm-12'>{name}</div>
            <div className='col-12 col-md-12 col-sm-12'>
                <audio controls preload="none">
                    <source src={path} type="audio/mpeg" />
                </audio>
            </div>
        </div>
       </>
    );
};

export default Audio;
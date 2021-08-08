import React, { useState } from 'react';
import { uploadAudio } from '../HttpRequests/uploadAudio';
import Modal from '../Modal/Index';
const Upload = ({close}) => {
    const [file,setFile] = useState(null);
    const changeHandler =  (event) => setFile(event.target.files);

    const submitHandler = async (e)=>{
        e.preventDefault()
        const form = new FormData();
        Object.keys(file).forEach(key=>form.append('file',file[key]));
        const response = await uploadAudio(form);
        console.log(response)
    }
    return (
    <Modal close={close}>
        <div className='row mx-0 d-flex justify-content-center align-items-center'>
            <div className="Upload_container m-5 col-lg-6 col-md-12 col-sm-12">
                <form  onSubmit={submitHandler} method="post" encType="multipart/form-data">
                    <input type="file" name="file" accept="audio/mp3" onChange={changeHandler} multiple/>
                    <input type='submit'/>
                </form>
            </div>   
        </div>
    </Modal>
    );
};

export default Upload;
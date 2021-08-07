import axios from "axios";
import { UPLOAD_AUDIO } from "../APIs/EndPoints";

export const uploadAudio = async () =>{
    try {
        return await axios.post(UPLOAD_AUDIO);    
    } catch (error) {
        
    }
}
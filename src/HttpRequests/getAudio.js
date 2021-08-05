import axios from "axios"
import { GET_AUDIO } from "../APIs/EndPoints"

export const getAudio = async ()=>{
    try {
        const response = await axios.get(GET_AUDIO);
        return (Array.isArray(response.data?.musics) && response.data.musics) || [] ;  
    } catch (error) {
        return [];
    }
   
}
import axios from "axios";

export const getData = async (url: string) => {
    try{
        const response = await axios.get(url);
        const result = await response?.data;
        return result;
    }
    catch(error) {
        return error
    }

}
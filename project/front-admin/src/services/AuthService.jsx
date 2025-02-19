import axios from "axios";
import { API_URL } from "../constants/API_URL";

let doLogin = async(obj)=>{
    let response = await axios.post(`${API_URL}/adminauth`, obj);
    return response.data;
}

export default doLogin;
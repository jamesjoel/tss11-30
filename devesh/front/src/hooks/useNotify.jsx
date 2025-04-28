import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

let useNotify = (msg, navigateTo)=>{
    let navigate = useNavigate();
    return()=> toast(msg, {
        position : 'top-right',
        closeOnClick : false,
        theme : 'dark',
        onClose : ()=>{
            if(navigateTo != ''){
                navigate(navigateTo);
            }
        }
    })
}

export default useNotify;
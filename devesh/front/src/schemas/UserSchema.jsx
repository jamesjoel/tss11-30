import * as YUP from 'yup'
import axios from 'axios'
import { API_URL } from '../constants/API_URL'

let userSchema = YUP.object({
    name: YUP
    .string()
    .required("Insert Your Full Name")
    .test("checkUpperCase", "First Letter should be capital",
        (value)=>{
            let data = value.split("");
            if(data[0] == data[0].toUpperCase()){
                return true ;
            }else{
                return false;
            }
        }
    ),
    
    email: YUP
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Email Id is Not Correct")
    .required("Insert Your Email Id")
    .test("checkusername", "This EmailId is already registered", async(value)=>{
        let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(value!= "" && reg.test(value)==true){
        let response = await axios.get(`${API_URL}/userauth/checkusername/${value}`)
        //    console.log(response.data);
        return response.data.success;
        }else{
            return true;
        }
    }),
    
    password: YUP.string()
    .required("Insert Your Password"),
    // .test("checkpassword", "Strong Password must contains min length 8 with minimum one special character,numeric value,lowercase,uppercase",(value)=>{
    //     let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;
    //     if(value!=""&& reg.test(value)){
    //         return true;
    //     }else{
    //         return false;
    //     }

    // }),
    
    repassword: YUP.string()
    .oneOf([YUP.ref('password')], "Password and Re-Password should be same")
    .required("Insert Your Re-Password"),
    
    contact: YUP.number().typeError("Insert Numbers Only")
    .min(999999999 , "Contact Number should be 10 digit")
    .max(9999999999 , "Contact Number should be 10 digit")
    .required("Insert Your Contact Number"),
    
    state: YUP.string().required("Insert Your State"),
    
    city: YUP.string().required("Insert Your City"),
    
    address: YUP.string().required("Insert Your Address"),
    
    gender: YUP.string().required("Insert Your Gender"),

});

export default userSchema ;
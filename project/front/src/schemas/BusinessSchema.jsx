import * as YUP from 'yup';
let BusinessSchema = YUP.object({
    name : YUP.string().required("Insert Your Name"),
    business_name : YUP.string().required("Insert Your Business Name"),
    email : YUP.string().email("Email Id not Correct").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Passowrd"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Numbers only").required("Insert Your Number"),
    
    
    address : YUP.string().required("Insert Your Business Address"),
})

export default BusinessSchema;

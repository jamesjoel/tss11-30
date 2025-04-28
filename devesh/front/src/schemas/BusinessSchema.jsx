import * as YUP from 'yup' ;

let businessSchema = YUP.object({
    name: YUP.string().required("Insert Your Name"),
    
    business_name: YUP.string().required("Insert Your Business Name"),
    
    email: YUP.string().email("Email Id is not correct").required("Insert Your Email Id"),
    
    password: YUP.string().required("Insert Your Password"),
    
    repassword: YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same")
    .required("Insert Your Re-Password"),
    
    contact: YUP.number().typeError("Insert Numbers Only")
    .min(999999999 , "Contact Number should be 10 digit")
    .max(9999999999 , "Contact Number should be 10 digit")
    .required("Insert Your Contact Number"),
    
    address: YUP.string().required("Insert Your Business Address"),
})

export default businessSchema ;
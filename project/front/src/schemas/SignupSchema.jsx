import * as YUP from 'yup'

let SignupFrmSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().required("Insert Your Email Id").email("Email Id not Correct"),
    password : YUP.string().required("Insert Your Password"),
    repassword : YUP.string().oneOf([YUP.ref('password')], "Password and Re-Password Should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Numbers Only").min(999999999, "Contact Number Should be 10 Digit").max(9999999999, "Contact Number Should be 10 Digit").required("Insert Your Contact Number"),
    gender : YUP.string().required("Select Your Gender"),
    address : YUP.string().required("Insert Your Address"),
    state : YUP.string().required("Select Your State"),
    city : YUP.string().required("Select Your City")
});

export default SignupFrmSchema;``
import * as YUP from 'yup'

let ProfileFrmSchema = YUP.object({
    name: YUP.string().required("Insert Your Full Name"),
    
    contact: YUP.number().typeError("Insert Numbers Only")
    .min(999999999 , "Contact Number should be 10 digit")
    .max(9999999999 , "Contact Number should be 10 digit")
    .required("Insert Your Contact Number"),
    
    state: YUP.string().required("Insert Your State"),
    
    city: YUP.string().required("Insert Your City"),
    
    address: YUP.string().required("Insert Your Address"),
    
    gender: YUP.string().required("Insert Your Gender"),

});

export default ProfileFrmSchema ;
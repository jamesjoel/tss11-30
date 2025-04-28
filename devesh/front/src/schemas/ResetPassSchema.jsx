import * as YUP from 'yup'

let ResetPassSchema = YUP.object({

    password : YUP.string().required("Insert New Password"),
    
    repassword : YUP.string().oneOf([YUP.ref("password")], "New Password and Confirm New Password not matched").required("Insert Confirm New Password"),
})

export default ResetPassSchema;
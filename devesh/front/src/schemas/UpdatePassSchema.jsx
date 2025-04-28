import * as YUP from 'yup'

let UpdatePassSchema = YUP.object({

    pass : YUP.string().required("Insert Current Password"),
    
    newpass : YUP.string().required("Insert New Password"),
    
    renewpass : YUP.string().oneOf([YUP.ref("newpass")], "New Password and Confirm New Password not matched").required("Insert Confirm New Password"),
})

export default UpdatePassSchema;
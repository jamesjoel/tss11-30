import * as YUP from 'yup' ;

let LoginFrmSchema = YUP.object({

    username : YUP.string().required("Insert Your Email Id").email("Email Id not correct"),

    password : YUP.string().required("Insert Your Password")
});

export default LoginFrmSchema ;
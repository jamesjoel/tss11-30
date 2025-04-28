import * as YUP from 'yup'

let bookTableSchema = YUP.object({
   
    date : YUP.string().required("Insert Booking Date"),
    time : YUP.string().required("Insert Booking Time"),
    tables : YUP.number().typeError("Insert Numbers Only").min(1, "Select Table Number More Than Zero").required("Insert Table Number Which You Want To Book"),
})

export default bookTableSchema ;
import * as YUP from 'yup'

let HotelSchema = YUP.object({
   
    hotelname : YUP.string().required("Insert Hotel Name"),
    hotelimage : YUP.string().required("Insert Hotel Image"),
    menuimage : YUP.string().required("Insert Hotel Menu Image"),
    address : YUP.string().required("Insert Hotel Full Address"),
    tables : YUP.number().typeError("Insert Numbers Only").min(1, "Select Table Number More Than Zero").required("Insert Table Number Which You Want To Book"),
    price : YUP.number().typeError("Insert Price Only").required("Insert Per Table Price")
})

export default HotelSchema ;
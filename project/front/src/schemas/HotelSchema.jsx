import * as YUP from 'yup'

let HotelSchema = YUP.object({
    hotelname : YUP.string().required("Insert Hotel Name"),
    hotelimage : YUP.string().required("Insert Hotel Image"),
    menuimage : YUP.string().required("Insert Hotel Menu Image"),
    address : YUP.string().required("Insert Hotel Full Address"),
    tables : YUP.number().typeError("Insert Numbers only").required("Insert Table Number which you want to book"),
    price : YUP.number().typeError("Insert Price Only").required("Insert Table/Price"),
})

export default HotelSchema;
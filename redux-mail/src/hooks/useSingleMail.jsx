import { useSelector } from "react-redux"
export default function useSingleMail (id){
    let allMail = useSelector(state=>state.MailReducer);
    return allMail.filter(item=> item.id == id)[0];
}

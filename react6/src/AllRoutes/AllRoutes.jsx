import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Help from '../pages/Help';
import Help2 from '../pages/Help2';
import UserIndex from '../pages/user/Index';
import UserSetting from '../pages/user/Setting';
import UserMore from '../pages/user/More';
import UserModule from '../module/UserModule';
import FindMe from '../pages/FindMe';
let AllRoutes = ()=>{
    return(
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="findme" element={<FindMe />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="help" element={<Help />} />
            <Route path="demo/:a" element={<Help2 />} />
            <Route path="demo/:a/:b" element={<Help2 />} />
            <Route path=':a/contact' element={<Contact />} />

            <Route path='user' element={<UserModule />}>

                    <Route path='' element={<UserIndex />} />
                    <Route path='setting' element={<UserSetting />} />
                    <Route path='more' element={<UserMore />} />

            </Route>

        </Routes>
    )
}

export default AllRoutes;


/*
    :5173/user              --- user/Index
    :5173/user/setting      --- user/Setting
    :5173/user/more         --- user/More


    :5173/setting
    :5173/more


    :5173/student
    :5173/student/att
    :5173/student/fee
    :5173/student/result
    :5173/student/result/pass
    :5173/student/result/fail

    :5173/result




    :5173/employee
    :5173/employee/staff
    :5173/employee/wroker/per
    :5173/employee/wroker/temp
    :5173/employee/wroker/daly
    :5173/employee/office
    :5173/employee/salary
    :5173/employee/leave

*/
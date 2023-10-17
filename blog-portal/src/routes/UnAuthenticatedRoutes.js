import React from "react";
import Home from "../pages/Home";
import {Routes,Route} from "react-router-dom";
import FrontendLayout from "../components/FrontendLayout/FrontendLayout";
import PostDetail  from "../pages/PostDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
// import Home2 from "../pages/Home2";


function UnAuthenticatedRoutes(){
    return(
    <Routes>
        <Route element={<FrontendLayout/>}>

        <Route  path={UnAuthenticatedRoutesNames.HOME} element={<Home/>}/>
        <Route path={UnAuthenticatedRoutesNames.POST_DETAIL} element ={<PostDetail/>} />
        <Route path={UnAuthenticatedRoutesNames.LOGIN} element={<Login/>}/>
        <Route path={UnAuthenticatedRoutesNames.REGISTER} element={<Register/>}/>
            
      
    
        </Route>
    </Routes>
    )
}
export default UnAuthenticatedRoutes;
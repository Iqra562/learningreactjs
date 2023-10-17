import {AuthUtilConstant} from "./util.constant";
const saveToken =  (token)=>{
 localStorage.setItem(AuthUtilConstant.USER_TOKEN,token);
};
const removeToken = ()=>{
    localStorage.removeItem(AuthUtilConstant.USER_TOKEN);
};
const isUserisLoggedIn = ()=>{
    const token = localStorage.getItem(AuthUtilConstant.USER_TOKEN);
    if(!token){
        return false;

    };
    return true;
};
export const AuthUtils = {
    saveToken,
    removeToken,
    isUserisLoggedIn,
}

import {ApiService} from "../utilities/Api.service";
const userServicesUrl = {
    login : "/login",
};
const login = (data) =>{
 const response = ApiService.post(userServicesUrl.login,data);
 return response;
}
export const UserServices = {
    login,
};
import {create} from "apisauce";
const ApiSauceInstance = create({
    baseURL: process.env.REACT_APP_API_URL,
});
const get = (url , queryParams={})=>{
const response =ApiSauceInstance.get(url,queryParams);
return response;
}
const post = (url,data)=>{
    const response = ApiSauceInstance.post(url,data);
    return response;
}
const put = (url,data)=>{
    const response = ApiSauceInstance.put(url,data);
    return response;
}
const patch = (url,data)=>{
    const response = ApiSauceInstance.patch(url,data);
    return response;
}
const deleteRequest = (url,queryParams)=>{
     const response =  ApiSauceInstance.delete(url ,queryParams);
     return response;
}
export const ApiService= {
    get,
    post,
    put,
    patch,
    delete:deleteRequest,
}

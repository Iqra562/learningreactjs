import {ApiService} from "../utilities/Api.service";
const CategoriesServiceUrls = {
    getCategoriesURL :"/categories",
}
const getCategories = ()=>{
    const  response = ApiService.get(CategoriesServiceUrls.getCategoriesURL);
    return response;
};
export const CategoriesServices = {
    getCategories,
}
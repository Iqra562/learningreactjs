import {ApiService} from "../utilities/Api.service";
const PostServiceUrl ={
getPosts:"/posts",
}
const getPosts = ()=>{
    const response = ApiService.get(PostServiceUrl.getPosts);
    return response;
};
export const PostServices = {
    getPosts,
};
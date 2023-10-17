import React,{useMemo} from "react";
import "../../assets/frontend/css/bootstrap.min.css";
import "../../assets/frontend/css/blog-home.css";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import { Link, Outlet } from "react-router-dom";
import {AuthUtils} from "../../utilities/Auth.util";
import  {useQuery} from "react-query";
import {CategoriesServices} from "../../services/categories.services";
function FrontendLayout() {
  const {data: categoriesData} = useQuery("getCategories", CategoriesServices.getCategories);
  console.log(categoriesData);
  const getCategories = useMemo(()=>categoriesData?.data?.results, [categoriesData?.data?.results]);
  const ShowFiveCategories  = useMemo(()=>categoriesData?.data?.results?.splice(0,5),[categoriesData?.data?.results]
  );
  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
   <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to={UnAuthenticatedRoutesNames.HOME}>
              Home
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              {AuthUtils.isUserisLoggedIn()?(
                <li>
                  <a  onClick={(event)=>{
      event.preventDefault();
      AuthUtils.removeToken();
      window.location.reload(true);
                  }}>Logout</a>
                </li>
              ):(
                <>
              {ShowFiveCategories?.map((singleCategory,index)=>(
                <li>
                  <a href="#">{singleCategory.cat_title}</a>
                </li>
              ))}
              <li>
                <Link to={UnAuthenticatedRoutesNames.LOGIN}>Login</Link>
              </li>
              <li>
                <Link to={UnAuthenticatedRoutesNames.REGISTER}>Register</Link>
              </li>
              </>
            )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Outlet />
          </div>

          <div className="col-md-4">
            <div className="well">
              <h4>Blog Search</h4>
              <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>

            <div className="well">
              <h4>Blog Categories</h4>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    {getCategories?.length>0 &&
                       getCategories?.map((singleCategory,index)=>(                    <li>
                      <a href="#"> 
                      {index+1}-{singleCategory.cat_title}
                      </a>
                    </li>
                   )) 
                  }

                  </ul>
                </div>

          
              </div>
            </div>

            <div className="well">
              <h4>Side Widget Well</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, perspiciatis adipisci accusamus laudantium odit
                aliquam repellat tempore quos aspernatur vero.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FrontendLayout;

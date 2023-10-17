import React, {useMemo} from "react";
import {useQuery} from "react-query";
import {PostServices} from "../services/post.services";
import {UtilServices} from "../utilities/util.service";
import { useNavigate } from "react-router-dom"; 
import {UnAuthenticatedRoutesNames} from "../utilities/util.constant";

function Home(){
    return <div>    <div >

    <h1 className="page-header">
        Page Heading
        <small>Secondary Text</small>
    </h1>
    <h2>
        <a href="#">Blog Post Title</a>
    </h2>
    <p className="lead">
        by <a href="index.php">Start Bootstrap</a>
    </p>
    <p><span className="glyphicon glyphicon-time"></span> Posted on August 28, 2013 at 10:00 PM</p>
    <hr/>
    <img className="img-responsive" src="http://placehold.it/900x300" alt=""/>
    <hr/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
    <a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right"></span></a>

    <hr/>

    <h2>
        <a href="#">Blog Post Title</a>
    </h2>
    <p className="lead">
        by <a href="index.php">Start Bootstrap</a>
    </p>
    <p><span className="glyphicon glyphicon-time"></span> Posted on August 28, 2013 at 10:45 PM</p>
    <hr/>
    <img className="img-responsive" src="http://placehold.it/900x300" alt=""/>
    <hr/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quasi, fugiat, asperiores harum voluptatum tenetur a possimus nesciunt quod accusamus saepe tempora ipsam distinctio minima dolorum perferendis labore impedit voluptates!</p>
    <a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right"></span></a>

    <hr/>
    <h2>
        <a href="#">Blog Post Title</a>
    </h2>
    <p className="lead">
        by <a href="index.php">Start Bootstrap</a>
    </p>
    <p><span className="glyphicon glyphicon-time"></span> Posted on August 28, 2013 at 10:45 PM</p>
    <hr/>
    <img className="img-responsive" src="http://placehold.it/900x300" alt=""/>
    <hr/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, voluptates, voluptas dolore ipsam cumque quam veniam accusantium laudantium adipisci architecto itaque dicta aperiam maiores provident id incidunt autem. Magni, ratione.</p>
    <a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right"></span></a>

    <hr/>

    <ul className="pager">
        <li className="previous">
            <a href="#">&larr; Older</a>
        </li>
        <li className="next">
            <a href="#">Newer &rarr;</a>
        </li>
    </ul>


</div></div>
}
export default Home;
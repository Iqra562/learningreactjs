import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { PostServices } from "../services/post.services";
import { UtilServices } from "../utilities/util.service";
import { useNavigate } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

function Home() {
  const navigate = useNavigate();
  const { data: getPostData } = useQuery("getPosts", PostServices.getPosts);
  const getPostDataMemo = useMemo(() => getPostData?.data?.results, [getPostData?.data?.results]);

  return (
    <div>
      <h1 className="page-header">All Posts</h1>
      {getPostDataMemo?.map((singlePost) => {
        return (
          <div key={singlePost.id}>
            <h2>
              <a
                className="cursor-pointer"
                onClick={() => {
                  navigate(
                    UnAuthenticatedRoutesNames.PostServices.replace(
                      ":id",
                      singlePost?.id
                    )
                  );
                }}
                href="#"
              >
                {singlePost?.post_title}
              </a>
            </h2>
            <p className="lead">
              by <a href="index.php">{singlePost?.post_author}</a>
            </p>

            <p>
              <span className="glyphicon glyphicon-time"></span> Posted on &nbsp;{" "}
              {UtilServices.convertDateToMyFormat(singlePost?.post_date)}
            </p>
            <hr />
            {singlePost?.image ? (
              <img
                onClick={() => {
                  navigate(
                    UnAuthenticatedRoutesNames.POST_DETAIL.replace(
                      ":id",
                      singlePost?.id
                    )
                  );
                }}
                className="img-responsive cursor-pointer"
                src={singlePost.image}
                alt=""
              />
            ) : (
              <img
                onClick={() => {
                  navigate(
                    UnAuthenticatedRoutesNames.POST_DETAIL.replace(
                      ":id",
                      singlePost?.id
                    )
                  );
                }}
                className="img-responsive cursor-pointer"
                src="http://placehold.it/900x300"
                alt=""
              />
            )}
            <hr />
            <p>{singlePost?.post_content}</p>
            <a className="btn btn-primary" href="#">
              Read More <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Home;

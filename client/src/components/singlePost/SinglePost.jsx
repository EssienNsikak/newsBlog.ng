import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import "./singlePost.css";
import Axios from 'axios';

export default function SinglePost() {

  const location = useLocation()
  const path = location.pathname.split('/')[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await Axios.get('http://localhost:5000/api/posts/'+path)
      setPost(res.data)
    }
    fetchPost()
  }, [path])
  
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
          post.photo && (
            <img
              className="singlePostImg"
              src={post.photo}
              alt="postPhoto"
            />
          )
        }
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}

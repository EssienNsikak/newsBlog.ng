import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import "./singlePost.css";
import Axios from 'axios';
import { Context } from '../../context/Context';

export default function SinglePost() {

  const location = useLocation()
  const path = location.pathname.split('/')[2];

  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';

  const { user } = useContext(Context);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await Axios.get('http://localhost:5000/api/posts/'+path)
      setPost(res.data)
    }
    fetchPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await Axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data:{username: user.username}
      });
      window.location.replace('/');
    } catch (err) {}
    
  }
  
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
          post.photo && (
            <img
              className="singlePostImg"
              src={PF + post.photo}
              alt="postPhoto"
            />
          )
        }
        <h1 className="singlePostTitle">

          {post.title}

          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          )}

        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link to={`/?user=${post.username}`} className="link">
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

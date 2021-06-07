import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src='https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-1/p160x160/135815391_2983224828571970_6606666135698533333_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeFIWqJHvJq21rb-ohAV9rpZ3L1TkB07m7ncvVOQHTubuS36nYBaMmnY2jHp0wx2nQ4WGLknf17AIw-BAmi2OigA&_nc_ohc=tYLM8ioSlQsAX9i2UlY&tn=u5_eR0gFrdoZZIhP&_nc_ht=scontent.flos1-1.fna&tp=6&oh=5e6d87461f91f9986eb92d9bdfc89755&oe=60E3F033'
              alt='mypicture'
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
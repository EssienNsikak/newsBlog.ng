import { Link } from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
        src='https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/135905396_2981315725429547_2547460465442062005_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHOhhHs9l1SD6BIqcj63UeHg9GjZ6bckgCD0aNnptySANoiNb12Mx69sGGYRY6sLgDdGZ-LgJGt-yeIoCtD__yy&_nc_ohc=t4ynTHz5DMIAX8g4wX6&_nc_ht=scontent.flos1-1.fna&oh=3b81183467078c106483983f785686cd&oe=60E269D5'
        alt='mypicture' 
        />
        <p>
          I am a Junior Software Developer who is passionate about building very stable, efficient, and reliable APIs. I Enjoy writing quality codes, learning new technologies, and sharing knowledge with others. A resourceful, dynamic, and result-oriented individual with the potential to learn fast. An exquisite gentleman with problem-solving abilities.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Lifestyle">
              Lifestyle
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music & Movies
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Politics">
              Politics
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=News">
              News
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
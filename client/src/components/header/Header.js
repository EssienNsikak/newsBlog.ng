import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">News & More</span>
        <span className="headerTitleLg">News.ng</span>
      </div>
      <img
        className='headerImg'
        src="https://hotels.ng/travel/content/images/2016/02/Akwa-ibom.JPG?rw=1281&rh=669"
        alt=""
      />
    </div>
  );
}
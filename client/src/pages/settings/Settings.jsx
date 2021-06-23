import "./settings.css";
import Sidebar from "../../components/sidebar/SideBar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
            src='https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-1/p160x160/135815391_2983224828571970_6606666135698533333_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeFIWqJHvJq21rb-ohAV9rpZ3L1TkB07m7ncvVOQHTubuS36nYBaMmnY2jHp0wx2nQ4WGLknf17AIw-BAmi2OigA&_nc_ohc=tYLM8ioSlQsAX9i2UlY&tn=u5_eR0gFrdoZZIhP&_nc_ht=scontent.flos1-1.fna&tp=6&oh=5e6d87461f91f9986eb92d9bdfc89755&oe=60E3F033'
            alt='mypicture'
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Enter your Username" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
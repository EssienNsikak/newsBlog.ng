import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img='https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/196535278_1435673543462202_2922379014645530483_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFCWnDePBGTvWZcU2LJ8QMFBHP8W8z6nK4Ec_xbzPqcrkpavEoMhY0SUkXmjlr-Ufc9fAKSpKsZeu_Oaj_F0n2f&_nc_ohc=Pj3DA_fnQ90AX8nepQf&_nc_ht=scontent.flos1-1.fna&oh=52a866ee452c48ed9a9e37b7e14ad772&oe=60E0F5AC' />
      <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img='https://laughtercourt.com/wp-content/uploads/2020/12/ibom-3.jpg'/>
      <Post img='http://www.travelstart.com.ng/blog/wp-content/uploads/2015/03/HDLeMeridienIbomExecutiveRoom-Copy-780x438.jpg'/>
      <Post img='https://hotels.ng/guides/wp-content/uploads/2017/07/ikot-ekpene-main.jpg'/>
    </div>
  );
}
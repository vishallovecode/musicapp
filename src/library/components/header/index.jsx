import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import List from "../list";
import Input from "../input";
import CustomAvatar from "../Avatar";
import './header.css'

const nav_data = [
  { Icon: <HomeIcon />, text: "Home" , to :'/' },
  { Icon: <FeedIcon />, text: "Social" , to: '/social' },
  { Icon: <LibraryMusicIcon />, text: "Library"  , to: 'library'},
];

const Header = (props) => {
  return (
    <div className="flex justify-between header">
      <div>
      Bajate Raho
      </div>
      {nav_data.map((item) => {
        // return <List  item = {item}/>
        return (
          <List item ={item}/>
        );
      })}

      <Input  placeholder ='Search here..'/>
      <CustomAvatar />
    </div>
  );
};

export default Header;

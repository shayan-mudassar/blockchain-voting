import "../css/SidebarStyle.css";
import { SidebarData, WebsiteDetails } from "../Data/SidebarData";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
const Sidebar = () => {
  const [data, setData] = useState(SidebarData);

  function handleClick(title) {
    let tmp = data;
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].title === title) {
        tmp[i].id = "active";
      } else {
        tmp[i].id = "";
      }
    }
    setData(tmp);
  }

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="website__details">
            <div className="website__logo">
              <HowToVoteIcon style={{fill:'white', fontSize:'2.5rem'}}/>
            </div>
            <div className="website__title">{WebsiteDetails.title}</div>
          </div>
          <hr />
          <ul className="sidebar__items">
            {data.map((item, index) => {
              return (
                <Link to={item.link} key={index}>
                  <li
                    id={item.id}
                    onClick={() => handleClick(item.title)}
                    key={index}
                    className="row"
                  >
                    <div id="icon">{item.icon}</div>
                    <div id="title">{item.title}</div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

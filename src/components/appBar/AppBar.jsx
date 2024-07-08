import { useDispatch } from "react-redux";
import { AppBarWrap } from "./AppBar.styles";
import { setSidebarOpen } from "../../redux/slices/sidebarSlice";
import { MdMenu, MdNotifications } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Images } from "../../assets/images";

const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <AppBarWrap>
      <div className="appbar-content">
        <div className="appbar-head-top">
          <button
            type="button"
            className="sidebar-open-btn"
            onClick={() => dispatch(setSidebarOpen())}
          >
            <MdMenu size={24} />
          </button>
          <p className="appbar-head-breadcrumb">Pages / Dashboard</p>
        </div>
        <div className="appbar-head-main">
          <h3 className="appbar-head-ttl">Main Dashboard</h3>
          <div className="appbar-head-rtl">
            <form className="appbar-head-search">
              <span className="appbar-search-icon">
                <FiSearch />
              </span>
              <input
                type="text"
                className="appbar-search-input"
                placeholder="Search"
              />
            </form>
            <div className="appbar-head-misc">
              <button type="button" className="appbar-head-notif">
                <MdNotifications size={24} />
              </button>
              <button type="button" className="appbar-head-info">
                <IoMdInformationCircleOutline size={24} />
              </button>
            </div>
            <div className="appbar-head-profile">
              <div className="appbar-head-avatar">
                <img src={Images.Avatar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppBarWrap>
  );
};

export default AppBar;

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { BsCaretRightFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  let activeClassName = "font-bold";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="    bg-secondary ">
      <div className="global-container flex justify-between items-center py-8">
        {/* Left */}
        <div className="font-bold text-sm lg:text-xl text-primary">
          <Link to="/">Goals Setter</Link>
        </div>

        {/* Right */}
        <div className="flex  gap-8">
          <ul className="flex flex-col lg:flex-row gap-x-3 items-center ">
            {user ? (
              <button
                onClick={onLogout}
                className="bg-primary text-light rounded-full px-3 lg:px-5 lg:py-2 py-1 text-sm items-center "
              >
                Logout
              </button>
            ) : (
              <>
                <li className=" font-semibold text-primary text-[12px] lg:text-sm flex items-center gap-1">
                  <AiFillHome size={13} className="hidden lg:block" />
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? activeClassName : undefined;
                    }}
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className=" font-semibold text-primary text-[12px] lg:text-sm flex items-center gap-1">
                  <FaUser size={13} className="hidden lg:block" />
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? activeClassName : undefined;
                    }}
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
                <li className=" font-semibold text-primary text-[12px] lg:text-sm flex items-center gap-1">
                  <BsCaretRightFill size={13} className="hidden lg:block" />
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? activeClassName : undefined;
                    }}
                    to="/"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

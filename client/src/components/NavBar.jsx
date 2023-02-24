import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

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
    <div className="   bg-secondary ">
      <div className="global-container flex justify-between items-center py-8">
        {/* Left */}
        <div className="font-bold text-xl text-primary">
          <Link to="/">Goals Setter</Link>
        </div>

        {/* Right */}
        <div className="flex gap-8">
          <ul className="flex gap-x-8 items-center ">
            {user ? (
              <button onClick={onLogout} className="btn-primary items-center ">
                Logout
              </button>
            ) : (
              <>
                <li className=" font-semibold text-primary">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? activeClassName : undefined;
                    }}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className=" font-semibold text-primary">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? activeClassName : undefined;
                    }}
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
                <li className=" font-semibold text-primary">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? activeClassName : undefined;
                    }}
                    to="/login"
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

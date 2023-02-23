import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  let activeClassName = "font-bold";

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
          </ul>
          {/* <button className="btn-primary items-center ">Logout</button> */}
        </div>
      </div>
    </div>
  );
};
export default NavBar;

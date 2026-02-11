import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Features/Auth/AuthSlice";
import { useLogoutUserMutation } from "../../redux/Features/Auth/AuthApi";
import logo from "../../assets/images/logo.png";

const navItems = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/dashboard/profile", label: "Profile" },
];

const UserDashboard = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="space-y-5 bg-white p-8 md:h-screen flex flex-col justify-between">
      <div>
        <div className="nav__logo flex flex-col items-center">
          <Link to="/">
            <img src={logo} alt="LYT Global" className="h-16 mb-2" />
          </Link>
          <p className="text-xs italic text-gray-600">User Portal</p>
        </div>
        <hr className="mt-5" />
        <ul className="space-y-5 pt-5">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-black"
                }
                end
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-3">
        <hr className="mb-3" />
        <button
          onClick={handleLogout}
          className="text-white bg-blue-600 hover:bg-blue-700 font-medium px-5 py-2 rounded-sm w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;

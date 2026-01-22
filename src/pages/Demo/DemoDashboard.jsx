import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MyCases from "../Dashboard/Cases/MyCases";

const DemoDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="LYT Global" className="h-12" />
              <div>
                <h1 className="text-xl font-bold">
                  LYT Global - Internal Operations System
                </h1>
                <p className="text-sm">Demo: Caseworker Dashboard</p>
              </div>
            </div>
            <Link
              to="/"
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start mt-4">
        {/* Sidebar */}
        <aside className="lg:w-1/5 sm:w-2/5 w-full border bg-white">
          <div className="space-y-5 p-8 flex flex-col justify-between min-h-[600px]">
            <div>
              <div className="nav__logo flex flex-col items-center mb-6">
                <img src={logo} alt="LYT Global" className="h-16 mb-2" />
                <p className="text-xs italic text-gray-600">Caseworker Portal</p>
              </div>
              <hr className="mb-5" />
              <ul className="space-y-5">
                <li>
                  <div className="text-blue-600 font-bold">My Cases</div>
                </li>
                <li>
                  <div className="text-black">New Assignments</div>
                </li>
                <li>
                  <div className="text-black">Documents</div>
                </li>
                <li>
                  <div className="text-black">Profile</div>
                </li>
              </ul>
            </div>
            <div>
              <hr className="mb-3" />
              <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium px-5 py-2 rounded-sm w-full">
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="p-8 bg-white w-full border mt-5">
          <MyCases />
        </main>
      </div>
    </div>
  );
};

export default DemoDashboard;

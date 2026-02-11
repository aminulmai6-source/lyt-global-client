import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import GenerateDocuments from "../Dashboard/Documents/GenerateDocuments";

const DemoDocuments = () => {
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
                  LYT Global - Document Generation System
                </h1>
                <p className="text-sm">Demo: Immigration Document Templates</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                to="/demo-dashboard"
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                to="/"
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto mt-4">
        <GenerateDocuments />
      </div>
    </div>
  );
};

export default DemoDocuments;

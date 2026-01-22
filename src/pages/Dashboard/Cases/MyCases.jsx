import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Mock data for development - In production, this would come from API
const mockCases = [
  {
    id: "CASE001",
    clientName: "John Smith",
    caseType: "Student Visa",
    status: "New",
    assignedTo: "Current User",
    dateAssigned: "2024-01-15",
    priority: "High",
  },
  {
    id: "CASE002",
    clientName: "Sarah Johnson",
    caseType: "Skilled Worker",
    status: "In Progress",
    assignedTo: "Current User",
    dateAssigned: "2024-01-14",
    priority: "Medium",
  },
  {
    id: "CASE003",
    clientName: "Ahmed Al-Rashid",
    caseType: "Sponsor Licence",
    status: "New",
    assignedTo: "Current User",
    dateAssigned: "2024-01-16",
    priority: "High",
  },
  {
    id: "CASE004",
    clientName: "Maria Garcia",
    caseType: "Student Visa",
    status: "Document Review",
    assignedTo: "Current User",
    dateAssigned: "2024-01-10",
    priority: "Low",
  },
];

const MyCases = () => {
  const { user } = useSelector((state) => state.auth);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cases based on status and search
  const filteredCases = mockCases.filter((caseItem) => {
    const matchesStatus =
      filterStatus === "all" || caseItem.status === filterStatus;
    const matchesSearch =
      caseItem.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.caseType.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Document Review":
        return "bg-purple-100 text-purple-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-orange-100 text-orange-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Cases</h1>
        <p className="text-gray-600">
          Manage and track all your assigned immigration cases
        </p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by case ID, client name, or case type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Document Review">Document Review</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-blue-600 text-sm font-semibold">Total Cases</p>
          <p className="text-2xl font-bold text-blue-900">{mockCases.length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
          <p className="text-green-600 text-sm font-semibold">New Cases</p>
          <p className="text-2xl font-bold text-green-900">
            {mockCases.filter((c) => c.status === "New").length}
          </p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
          <p className="text-yellow-600 text-sm font-semibold">In Progress</p>
          <p className="text-2xl font-bold text-yellow-900">
            {mockCases.filter((c) => c.status === "In Progress").length}
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-purple-600 text-sm font-semibold">High Priority</p>
          <p className="text-2xl font-bold text-purple-900">
            {mockCases.filter((c) => c.priority === "High").length}
          </p>
        </div>
      </div>

      {/* Cases Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Assigned
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCases.length > 0 ? (
              filteredCases.map((caseItem) => (
                <tr key={caseItem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {caseItem.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {caseItem.clientName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {caseItem.caseType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        caseItem.status
                      )}`}
                    >
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(
                        caseItem.priority
                      )}`}
                    >
                      {caseItem.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(caseItem.dateAssigned).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      to={`/dashboard/cases/${caseItem.id}`}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      View
                    </Link>
                    <Link
                      to={`/dashboard/cases/${caseItem.id}/documents`}
                      className="text-green-600 hover:text-green-900"
                    >
                      Documents
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No cases found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCases;

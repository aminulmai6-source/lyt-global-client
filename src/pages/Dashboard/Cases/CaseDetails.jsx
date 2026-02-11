import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Mock case data
const mockCaseDetails = {
  CASE001: {
    id: "CASE001",
    clientName: "John Smith",
    email: "john.smith@email.com",
    phone: "+44 7700 900123",
    caseType: "Student Visa",
    status: "New",
    priority: "High",
    assignedTo: "Current User",
    dateAssigned: "2024-01-15",
    dateCreated: "2024-01-15",
    nationality: "Indian",
    dateOfBirth: "1995-05-20",
    passportNumber: "AB1234567",
    universityName: "University of London",
    courseName: "MSc Computer Science",
    courseStartDate: "2024-09-01",
    notes: "Client requires urgent processing. All documents submitted.",
    documents: [
      { id: 1, name: "Passport Copy", uploadDate: "2024-01-15" },
      { id: 2, name: "University Offer Letter", uploadDate: "2024-01-15" },
      { id: 3, name: "Financial Documents", uploadDate: "2024-01-15" },
    ],
    timeline: [
      { date: "2024-01-15 10:30", event: "Case created and assigned", user: "System" },
      { date: "2024-01-15 14:20", event: "Initial documents uploaded", user: "Admin" },
    ],
  },
};

const CaseDetails = () => {
  const { caseId } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("details");
  const [newNote, setNewNote] = useState("");

  const caseDetails = mockCaseDetails[caseId] || mockCaseDetails.CASE001;

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

  const handleAddNote = () => {
    if (newNote.trim()) {
      alert(`Note added: ${newNote}`);
      setNewNote("");
    }
  };

  const handleUpdateStatus = (newStatus) => {
    alert(`Status updated to: ${newStatus}`);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Link
              to="/dashboard/my-cases"
              className="text-blue-600 hover:text-blue-800 mb-2 inline-block"
            >
              ← Back to Cases
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">
              Case {caseDetails.id}
            </h1>
            <p className="text-gray-600">{caseDetails.clientName}</p>
          </div>
          <div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                caseDetails.status
              )}`}
            >
              {caseDetails.status}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("details")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "details"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Case Details
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "documents"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Documents
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "timeline"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveTab("generate")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "generate"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Generate Documents
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Client Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Client Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <p className="text-gray-900">{caseDetails.clientName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <p className="text-gray-900">{caseDetails.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Phone
                </label>
                <p className="text-gray-900">{caseDetails.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Nationality
                </label>
                <p className="text-gray-900">{caseDetails.nationality}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Date of Birth
                </label>
                <p className="text-gray-900">{caseDetails.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Passport Number
                </label>
                <p className="text-gray-900">{caseDetails.passportNumber}</p>
              </div>
            </div>
          </div>

          {/* Case Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Case Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Case Type
                </label>
                <p className="text-gray-900">{caseDetails.caseType}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Priority
                </label>
                <p className="text-gray-900">{caseDetails.priority}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Assigned To
                </label>
                <p className="text-gray-900">{caseDetails.assignedTo}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Date Created
                </label>
                <p className="text-gray-900">{caseDetails.dateCreated}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Update Status
                </label>
                <select
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleUpdateStatus(e.target.value)}
                  defaultValue={caseDetails.status}
                >
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Document Review">Document Review</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Application Details */}
          {caseDetails.caseType === "Student Visa" && (
            <div className="bg-white rounded-lg shadow-sm p-6 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">
                Student Visa Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    University
                  </label>
                  <p className="text-gray-900">{caseDetails.universityName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Course
                  </label>
                  <p className="text-gray-900">{caseDetails.courseName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Start Date
                  </label>
                  <p className="text-gray-900">
                    {caseDetails.courseStartDate}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Notes */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Case Notes</h2>
            <div className="mb-4">
              <p className="text-gray-700">{caseDetails.notes}</p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a new note..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={handleAddNote}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "documents" && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Case Documents</h2>
          <div className="space-y-4">
            {caseDetails.documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      Uploaded: {doc.uploadDate}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:text-blue-800">
                  Download
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Upload Document
            </button>
          </div>
        </div>
      )}

      {activeTab === "timeline" && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Case Timeline</h2>
          <div className="space-y-4">
            {caseDetails.timeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <p className="text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-600">by {event.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "generate" && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Generate Documents</h2>
          <p className="text-gray-600 mb-6">
            Select a document template to generate for this case
          </p>
          <Link
            to={`/dashboard/cases/${caseId}/generate-documents`}
            className="block w-full"
          >
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-left">
              Go to Document Generator
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CaseDetails;

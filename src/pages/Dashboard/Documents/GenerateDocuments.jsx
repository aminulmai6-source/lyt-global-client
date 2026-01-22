import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const GenerateDocuments = () => {
  const { caseId } = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});

  const documentTemplates = [
    {
      id: "client-care-letter",
      name: "Client Care Letter",
      description: "Initial engagement letter outlining terms of service",
      category: "Client Documents",
    },
    {
      id: "letter-of-authority",
      name: "Letter of Authority",
      description: "Authorization to represent client in immigration matters",
      category: "Client Documents",
    },
    {
      id: "first-attendance-note",
      name: "First Attendance Note",
      description: "Record of initial consultation with client",
      category: "Case Documents",
    },
    {
      id: "closing-letter",
      name: "Closing Letter",
      description: "Final letter upon case completion",
      category: "Client Documents",
    },
    {
      id: "signposting-letter",
      name: "Signposting Letter",
      description: "Letter directing client to appropriate resources",
      category: "Client Documents",
    },
    {
      id: "service-level-agreement",
      name: "Service Level Agreement",
      description: "Agreement for non-regulated services (e.g., Sponsor Licence)",
      category: "Non-Regulated Services",
    },
  ];

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    // Initialize form data based on template
    setFormData({
      clientName: "John Smith",
      caseId: caseId,
      date: new Date().toLocaleDateString("en-GB"),
      address: "",
      email: "",
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateDocument = () => {
    if (!selectedTemplate) {
      alert("Please select a template first");
      return;
    }

    // Create printable document
    const printWindow = window.open("", "_blank");
    const documentContent = getDocumentContent(selectedTemplate.id, formData);

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${selectedTemplate.name} - Case ${caseId}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 40px;
              color: #333;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 2px solid #0066cc;
            }
            .logo {
              max-width: 200px;
              margin-bottom: 10px;
            }
            .company-name {
              font-size: 24px;
              font-weight: bold;
              color: #0066cc;
            }
            .document-title {
              font-size: 20px;
              font-weight: bold;
              margin: 20px 0;
              text-align: center;
            }
            .content {
              margin: 20px 0;
            }
            .footer {
              margin-top: 50px;
              padding-top: 20px;
              border-top: 1px solid #ccc;
              font-size: 12px;
              color: #666;
            }
            .signature-section {
              margin-top: 50px;
            }
            p {
              margin: 10px 0;
            }
            @media print {
              body {
                margin: 20px;
              }
            }
          </style>
        </head>
        <body>
          ${documentContent}
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  const getDocumentContent = (templateId, data) => {
    const headerHTML = `
      <div class="header">
        <div class="company-name">LYT GLOBAL</div>
        <p>IAA Regulated Consultancy Firm</p>
        <p>Immigration Advisory Services</p>
        <p>Level 1 Qualification Immigration Firm</p>
      </div>
    `;

    const footerHTML = `
      <div class="footer">
        <p><strong>LYT Global</strong> - IAA Regulated Immigration Consultancy</p>
        <p>This document is confidential and intended solely for the addressee.</p>
      </div>
    `;

    switch (templateId) {
      case "client-care-letter":
        return `
          ${headerHTML}
          <div class="document-title">CLIENT CARE LETTER</div>
          <div class="content">
            <p>Date: ${data.date}</p>
            <p>Case Reference: ${data.caseId}</p>
            <br/>
            <p>Dear ${data.clientName},</p>
            <br/>
            <p><strong>RE: Terms of Engagement and Client Care</strong></p>
            <br/>
            <p>Thank you for instructing LYT Global to assist you with your immigration matter. This letter sets out the terms on which we will provide our services to you.</p>
            <br/>
            <p><strong>1. Our Services</strong></p>
            <p>We will provide you with professional immigration advisory services in accordance with the Immigration Advisers Authority (IAA) regulations. Our services include:</p>
            <ul>
              <li>Assessment of your immigration case</li>
              <li>Advice on the appropriate visa category</li>
              <li>Preparation and submission of your application</li>
              <li>Liaison with relevant authorities on your behalf</li>
            </ul>
            <br/>
            <p><strong>2. Your Responsibilities</strong></p>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Respond promptly to our requests for information or documentation</li>
              <li>Keep us informed of any changes to your circumstances</li>
              <li>Pay our fees in accordance with the agreed terms</li>
            </ul>
            <br/>
            <p><strong>3. Fees and Payment</strong></p>
            <p>Our fees will be as agreed in our separate fee agreement. All fees are exclusive of VAT and disbursements.</p>
            <br/>
            <p><strong>4. Confidentiality</strong></p>
            <p>We will maintain the confidentiality of all information you provide to us, subject to our legal and regulatory obligations.</p>
            <br/>
            <p><strong>5. Complaints Procedure</strong></p>
            <p>If you are dissatisfied with our services, please contact our Complaints Manager in writing. We will investigate your complaint and respond within 28 days.</p>
            <br/>
            <p>If you have any questions about these terms, please do not hesitate to contact us.</p>
            <br/>
            <p>Yours sincerely,</p>
            <div class="signature-section">
              <p>_______________________</p>
              <p><strong>LYT Global</strong></p>
              <p>IAA Regulated Immigration Adviser</p>
            </div>
          </div>
          ${footerHTML}
        `;

      case "letter-of-authority":
        return `
          ${headerHTML}
          <div class="document-title">LETTER OF AUTHORITY</div>
          <div class="content">
            <p>Date: ${data.date}</p>
            <p>Case Reference: ${data.caseId}</p>
            <br/>
            <p><strong>TO WHOM IT MAY CONCERN</strong></p>
            <br/>
            <p>I, <strong>${data.clientName}</strong>, hereby authorize <strong>LYT Global</strong> to act as my representative in all matters relating to my immigration case.</p>
            <br/>
            <p>I authorize LYT Global to:</p>
            <ul>
              <li>Communicate with UK Visas and Immigration (UKVI) on my behalf</li>
              <li>Submit applications and correspondence to relevant authorities</li>
              <li>Receive correspondence and decisions regarding my immigration matter</li>
              <li>Access my immigration records and information</li>
              <li>Attend appointments and interviews with me or on my behalf where permitted</li>
            </ul>
            <br/>
            <p>This authority shall remain in force until revoked by me in writing or until the conclusion of my immigration matter, whichever occurs first.</p>
            <br/>
            <div class="signature-section">
              <p>Client Signature: _______________________</p>
              <p>Name: ${data.clientName}</p>
              <p>Date: ${data.date}</p>
              <br/><br/>
              <p>Adviser Signature: _______________________</p>
              <p>LYT Global Representative</p>
              <p>IAA Registration Number: [To be filled]</p>
            </div>
          </div>
          ${footerHTML}
        `;

      case "first-attendance-note":
        return `
          ${headerHTML}
          <div class="document-title">FIRST ATTENDANCE NOTE</div>
          <div class="content">
            <p>Date: ${data.date}</p>
            <p>Case Reference: ${data.caseId}</p>
            <p>Client Name: ${data.clientName}</p>
            <br/>
            <p><strong>1. Meeting Details</strong></p>
            <p>Date of Meeting: ${data.date}</p>
            <p>Time: [To be filled]</p>
            <p>Location: [Office/Telephone/Video Conference]</p>
            <p>Attendees: [Adviser name], ${data.clientName}</p>
            <br/>
            <p><strong>2. Purpose of Meeting</strong></p>
            <p>[Brief description of the purpose of the consultation]</p>
            <br/>
            <p><strong>3. Client's Immigration History</strong></p>
            <p>[Summary of client's current immigration status and history]</p>
            <br/>
            <p><strong>4. Client's Objectives</strong></p>
            <p>[What the client wishes to achieve]</p>
            <br/>
            <p><strong>5. Advice Given</strong></p>
            <p>[Summary of immigration advice provided]</p>
            <br/>
            <p><strong>6. Recommended Course of Action</strong></p>
            <p>[Recommended visa category and application strategy]</p>
            <br/>
            <p><strong>7. Documents Required</strong></p>
            <p>[List of documents client needs to provide]</p>
            <br/>
            <p><strong>8. Next Steps</strong></p>
            <p>[Action items and timeline]</p>
            <br/>
            <p><strong>9. Fees Discussed</strong></p>
            <p>[Fee structure agreed]</p>
            <br/>
            <div class="signature-section">
              <p>Prepared by: _______________________</p>
              <p>LYT Global Immigration Adviser</p>
              <p>Date: ${data.date}</p>
            </div>
          </div>
          ${footerHTML}
        `;

      case "closing-letter":
        return `
          ${headerHTML}
          <div class="document-title">CLOSING LETTER</div>
          <div class="content">
            <p>Date: ${data.date}</p>
            <p>Case Reference: ${data.caseId}</p>
            <br/>
            <p>Dear ${data.clientName},</p>
            <br/>
            <p><strong>RE: Closure of Your Immigration Case</strong></p>
            <br/>
            <p>We are writing to confirm that your immigration matter has now been successfully concluded.</p>
            <br/>
            <p><strong>Case Summary:</strong></p>
            <p>We were instructed to assist you with [brief description of the case]. We are pleased to confirm that [outcome achieved].</p>
            <br/>
            <p><strong>Final Matters:</strong></p>
            <ul>
              <li>All application documents and supporting evidence have been submitted</li>
              <li>We have received confirmation of [decision/outcome]</li>
              <li>All fees have been settled</li>
            </ul>
            <br/>
            <p><strong>Your Documents:</strong></p>
            <p>We will retain your file for a period of 7 years in accordance with regulatory requirements. If you require copies of any documents, please contact us within this period.</p>
            <br/>
            <p><strong>Future Immigration Needs:</strong></p>
            <p>Should you require immigration advice in the future, please do not hesitate to contact us. We would be pleased to assist you again.</p>
            <br/>
            <p>We wish you every success for the future.</p>
            <br/>
            <p>Yours sincerely,</p>
            <div class="signature-section">
              <p>_______________________</p>
              <p><strong>LYT Global</strong></p>
              <p>IAA Regulated Immigration Adviser</p>
            </div>
          </div>
          ${footerHTML}
        `;

      case "signposting-letter":
        return `
          ${headerHTML}
          <div class="document-title">SIGNPOSTING LETTER</div>
          <div class="content">
            <p>Date: ${data.date}</p>
            <p>Case Reference: ${data.caseId}</p>
            <br/>
            <p>Dear ${data.clientName},</p>
            <br/>
            <p><strong>RE: Signposting to Additional Resources</strong></p>
            <br/>
            <p>Thank you for your recent enquiry regarding [nature of enquiry].</p>
            <br/>
            <p>Following our assessment, we believe you may benefit from the following resources and organizations:</p>
            <br/>
            <p><strong>1. UK Visas and Immigration (UKVI)</strong></p>
            <p>Website: www.gov.uk/browse/visas-immigration</p>
            <p>For official guidance and application forms</p>
            <br/>
            <p><strong>2. Citizens Advice Bureau</strong></p>
            <p>Website: www.citizensadvice.org.uk</p>
            <p>For general advice on immigration matters</p>
            <br/>
            <p><strong>3. Immigration Advisers Authority (IAA)</strong></p>
            <p>Website: www.gov.uk/find-an-immigration-adviser</p>
            <p>To find other registered immigration advisers</p>
            <br/>
            <p><strong>4. Additional Resources</strong></p>
            <p>[List other relevant organizations or resources]</p>
            <br/>
            <p>Please note that this letter does not constitute legal advice. We recommend that you seek professional immigration advice for your specific circumstances.</p>
            <br/>
            <p>If you would like to instruct us to handle your immigration matter, please contact us to discuss our services and fees.</p>
            <br/>
            <p>Yours sincerely,</p>
            <div class="signature-section">
              <p>_______________________</p>
              <p><strong>LYT Global</strong></p>
              <p>IAA Regulated Immigration Adviser</p>
            </div>
          </div>
          ${footerHTML}
        `;

      case "service-level-agreement":
        return `
          ${headerHTML}
          <div class="document-title">SERVICE LEVEL AGREEMENT</div>
          <div class="content">
            <p>Date: ${data.date}</p>
            <p>Case Reference: ${data.caseId}</p>
            <br/>
            <p><strong>SERVICE LEVEL AGREEMENT FOR NON-REGULATED SERVICES</strong></p>
            <br/>
            <p>This Service Level Agreement ("Agreement") is entered into between:</p>
            <p><strong>Service Provider:</strong> LYT Global</p>
            <p><strong>Client:</strong> ${data.clientName}</p>
            <br/>
            <p><strong>1. SCOPE OF SERVICES</strong></p>
            <p>This Agreement covers non-regulated immigration services, including but not limited to:</p>
            <ul>
              <li>Sponsor Licence Applications</li>
              <li>Corporate immigration compliance</li>
              <li>Immigration training and consultancy</li>
            </ul>
            <br/>
            <p><strong>2. SERVICE STANDARDS</strong></p>
            <p>We commit to:</p>
            <ul>
              <li>Respond to all enquiries within 2 business days</li>
              <li>Provide regular updates on application progress</li>
              <li>Complete initial assessment within 5 business days</li>
              <li>Maintain professional standards in all communications</li>
            </ul>
            <br/>
            <p><strong>3. CLIENT RESPONSIBILITIES</strong></p>
            <p>The Client agrees to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Respond to requests for information within agreed timescales</li>
              <li>Pay agreed fees in accordance with the fee schedule</li>
              <li>Inform us of any changes to circumstances</li>
            </ul>
            <br/>
            <p><strong>4. FEES AND PAYMENT TERMS</strong></p>
            <p>Fees: As per separate fee agreement</p>
            <p>Payment Terms: [To be specified]</p>
            <p>All fees are exclusive of VAT and disbursements</p>
            <br/>
            <p><strong>5. CONFIDENTIALITY</strong></p>
            <p>Both parties agree to maintain confidentiality of all information exchanged during the provision of services.</p>
            <br/>
            <p><strong>6. TERM AND TERMINATION</strong></p>
            <p>This Agreement shall remain in force until the completion of services or termination by either party with 7 days written notice.</p>
            <br/>
            <p><strong>7. COMPLAINTS</strong></p>
            <p>Any complaints should be addressed to our Complaints Manager in writing. We will acknowledge within 3 business days and provide a full response within 28 days.</p>
            <br/>
            <div class="signature-section">
              <p>Client Signature: _______________________</p>
              <p>Name: ${data.clientName}</p>
              <p>Date: ${data.date}</p>
              <br/><br/>
              <p>Service Provider Signature: _______________________</p>
              <p>LYT Global Representative</p>
              <p>Date: ${data.date}</p>
            </div>
          </div>
          ${footerHTML}
        `;

      default:
        return `<p>Template not found</p>`;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Link
          to={`/dashboard/cases/${caseId}`}
          className="text-blue-600 hover:text-blue-800 mb-2 inline-block"
        >
          ← Back to Case
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Generate Documents
        </h1>
        <p className="text-gray-600">Case ID: {caseId}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Template Selection */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Document Templates</h2>
            <p className="text-sm text-gray-600 mb-4">
              Select a template to generate
            </p>
            <div className="space-y-2">
              {documentTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleSelectTemplate(template)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedTemplate?.id === template.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <p className="font-medium text-gray-900">{template.name}</p>
                  <p className="text-xs text-gray-600">{template.category}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Template Details and Form */}
        <div className="lg:col-span-2">
          {selectedTemplate ? (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-2">
                {selectedTemplate.name}
              </h2>
              <p className="text-gray-600 mb-6">
                {selectedTemplate.description}
              </p>

              {/* Form Fields */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    value={formData.clientName || ""}
                    onChange={(e) =>
                      handleInputChange("clientName", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    value={formData.date || ""}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {selectedTemplate.id !== "first-attendance-note" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Client Email
                    </label>
                    <input
                      type="email"
                      value={formData.email || ""}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={generateDocument}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Generate & Preview Document
                </button>
                <button
                  onClick={() => {
                    generateDocument();
                    setTimeout(() => window.print(), 1000);
                  }}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                >
                  Generate & Print
                </button>
              </div>

              {/* Template Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Template Information
                </h3>
                <p className="text-sm text-gray-600">
                  This template is designed for use with{" "}
                  {selectedTemplate.category.toLowerCase()}. The generated
                  document will include standard clauses and can be customized
                  before printing or saving.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No Template Selected
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Select a document template from the list to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateDocuments;

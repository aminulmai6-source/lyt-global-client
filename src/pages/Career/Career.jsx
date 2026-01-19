import React, { useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Modal,
  Badge,
} from "react-bootstrap";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/**
 * BRAND COLORS:
 * Te Papa Green: #203A43 (Deep, professional)
 * Shamrock: #40E687 (Vibrant, growth)
 * Wild Sand: #F4F4F4 (Clean background)
 */

const jobListings = [
  {
    title: "Business Development Executive",
    location: "London, UK",
    type: "Full-Time",
    salary: "Competitive",
    description:
      "We're looking for results-driven Business Development Executive to join our team. You will be responsible for identifying new business opportunities, building relationships with potential clients and partners, and contributing to our growth strategy.",
    requirements: [
      "Proven experience in business development, sales, or a related field.",
      "Excellent communication and negotiation skills.",
      "Ability to develop and maintain client relationships.",
      "Strong analytical and problem solving abilities.",
    ],
    applyInstructions:
      "Please send your CV and a brief cover letter outlining your relevant experience and why you are interested in this role to:",
    applyEmail: "info@lyt-global.com",
  },
  {
    title: "Student Consultant",
    location: "Sylhet, BD",
    type: "Full-Time",
    salary: "Competitive",
    description:
      "We're seeking an enthusiastic and knowledgeable Student Consultant to join our team in Sylhet. You'll be instrumental in guiding students through their academic journeys, providing expert advice on course selection, university applications, and career pathways.",
    requirements: [
      "Experience in educational consulting, advising, or a related field.",
      "Excellent interpersonal and active listening skills.",
      "Strong understanding of various educational systems and admission processes.",
      "Ability to empathize with students and provide personalized guidance.",
    ],
    applyInstructions:
      "Please send your CV and a brief cover letter outlining your relevant experience and why you are interested in this role to:",
    applyEmail: "info@lyt-global.com",
  },
  {
    title: "Services Development Executive",
    location: "London, UK",
    type: "Full-Time",
    salary: "Competitive",
    description:
      "We're seeking a highly motivated Services Development Executive to join our team in London. You'll be responsible for identifying new Services opportunities, building strong client relationships, and driving revenue growth.",
    requirements: [
      "Proven experience in Services development, sales, or a related field.",
      "Excellent communication, negotiation, and interpersonal skills.",
      "Ability to identify and cultivate new leads and opportunities.",
      "Strong understanding of sales principles and customer relationship management.",
    ],
    applyInstructions:
      "Please send your CV and a brief cover letter outlining your relevant experience and why you are interested in this role to:",
    applyEmail: "info@lyt-global.com",
  },
];

export default function Career() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return jobListings;
    return jobListings.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        (job.type || "").toLowerCase().includes(q)
    );
  }, [query]);

  const handleShowDetails = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleApplyClick = (job) => {
    if (job?.applyEmail) {
      const subject = encodeURIComponent(`Application for ${job.title}`);
      window.location.href = `mailto:${job.applyEmail}?subject=${subject}`;
      return;
    }
    navigate("/career/apply");
  };

  return (
    <main style={{ backgroundColor: "#F4F4F4", minHeight: "100vh" }}>
      {/* --- HERO SECTION --- */}
      <section 
        className="position-relative text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #203A43 0%, #2C5364 100%)",
          padding: "120px 0 80px",
          marginBottom: "40px"
        }}
      >
        {/* Subtle Background Pattern/Overlay */}
        <div 
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            opacity: 0.1,
            backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`,
            pointerEvents: "none"
          }}
        />
        
        <Container className="position-relative text-center">
          <Badge bg="success" className="mb-3 px-3 py-2 text-uppercase fw-bold" style={{ backgroundColor: "#40E687", color: "#203A43" }}>
            We're Hiring
          </Badge>
          <h1 className="display-3 fw-bold mb-3">Shape the Future with Us</h1>
          <p className="lead opacity-75 mx-auto mb-5" style={{ maxWidth: "700px" }}>
            Join LYT Global and help us build intelligent solutions for a more connected world. 
            Discover your next career move below.
          </p>

          {/* Integrated Search Bar */}
          <div className="d-flex justify-content-center">
            <div className="shadow-lg p-2 rounded-pill bg-white" style={{ maxWidth: "600px", width: "100%" }}>
              <InputGroup className="border-0">
                <InputGroup.Text className="bg-transparent border-0 ps-4">
                  <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  className="border-0 shadow-none py-2"
                  placeholder="Search by role or location..."
                  aria-label="Search jobs"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button 
                  className="rounded-pill px-4 ms-2"
                  style={{ backgroundColor: "#203A43", border: "none" }}
                >
                  Find Jobs
                </Button>
              </InputGroup>
            </div>
          </div>
        </Container>
      </section>

      {/* --- JOB LISTINGS --- */}
      <Container className="pb-5">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="h3 fw-bold text-dark mb-0">Open Positions</h2>
          <span className="text-muted">{filteredJobs.length} opportunities found</span>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <Col key={idx}>
                <Card 
                  className="h-100 border-0 shadow-sm transition-hover" 
                  style={{ 
                    borderRadius: "16px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer"
                  }}
                  onClick={() => handleShowDetails(job)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                  }}
                >
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="mb-3">
                      <Badge className="me-2" style={{ backgroundColor: "#E8F5E9", color: "#2E7D32" }}>
                        {job.type}
                      </Badge>
                      <Badge style={{ backgroundColor: "#E3F2FD", color: "#1976D2" }}>
                        {job.location}
                      </Badge>
                    </div>

                    <Card.Title className="fw-bold mb-3 h5" style={{ color: "#203A43" }}>
                      {job.title}
                    </Card.Title>

                    <Card.Text className="text-muted mb-4" style={{ fontSize: "0.95rem", flex: 1 }}>
                      {job.description.substring(0, 120)}...
                    </Card.Text>

                    <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
                      <span className="fw-bold text-dark">{job.salary}</span>
                      <Button 
                        variant="link" 
                        className="p-0 text-decoration-none fw-bold"
                        style={{ color: "#203A43" }}
                      >
                        Details <FaArrowRight size={12} className="ms-1" />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div className="p-5 text-center bg-white rounded-4 shadow-sm">
                <p className="mb-0 text-muted">No positions match your current search.</p>
              </div>
            </Col>
          )}
        </Row>
      </Container>

      {/* --- JOB DETAILS MODAL --- */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        contentClassName="border-0 shadow-lg"
        style={{ borderRadius: "20px" }}
      >
        <Modal.Header closeButton className="border-0 px-4 pt-4">
          <div>
            <Modal.Title className="fw-bold h3" style={{ color: "#203A43" }}>
              {selectedJob?.title}
            </Modal.Title>
            <div className="mt-2 text-muted">
              <FaMapMarkerAlt className="me-1" /> {selectedJob?.location} • <FaClock className="ms-3 me-1" /> {selectedJob?.type}
            </div>
          </div>
        </Modal.Header>

        <Modal.Body className="px-4 pb-4">
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Description</h5>
            <p className="text-muted leading-relaxed">{selectedJob?.description}</p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold mb-3">Key Requirements</h5>
            <ul className="text-muted">
              {selectedJob?.requirements?.map((req, i) => (
                <li key={i} className="mb-2">{req}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-3" style={{ backgroundColor: "#F8F9FA", borderLeft: "4px solid #40E687" }}>
            <h5 className="fw-bold h6">How to Apply</h5>
            <p className="small text-muted mb-3">{selectedJob?.applyInstructions}</p>
            <a 
              href={`mailto:${selectedJob?.applyEmail}`} 
              className="fw-bold text-decoration-none d-flex align-items-center"
              style={{ color: "#203A43" }}
            >
              <FaEnvelope className="me-2" /> {selectedJob?.applyEmail}
            </a>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-0 px-4 pb-4">
          <Button variant="light" onClick={() => setShowModal(false)} className="px-4">
            Close
          </Button>
          <Button 
            className="px-5 border-0"
            style={{ backgroundColor: "#203A43" }}
            onClick={() => handleApplyClick(selectedJob)}
          >
            Apply Now
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

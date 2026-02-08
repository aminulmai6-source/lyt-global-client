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
    title: "Sales & Marketing Executive",
    location: "London, UK",
    type: "Full-Time",
    salary: "Competitive + Commission",
    description:
      "We're seeking a dynamic Sales & Marketing Executive to join our UK office. You will drive revenue growth through strategic sales initiatives, develop marketing campaigns, and build lasting client relationships in the education sector. This role requires a proactive individual with a passion for achieving targets and expanding market presence.",
    requirements: [
      "Proven experience in sales and marketing, preferably in education or services sector.",
      "Excellent communication, negotiation, and presentation skills.",
      "Ability to develop and execute marketing strategies.",
      "Strong analytical skills and results-driven mindset.",
      "Experience with CRM systems and digital marketing tools.",
    ],
    applyInstructions:
      "Please send your CV and a brief cover letter outlining your relevant experience and why you are interested in this role to:",
    applyEmail: "info@lyt-global.com",
  },
  {
    title: "Student Counsellor",
    location: "Sylhet, Bangladesh",
    type: "Full-Time",
    salary: "Competitive",
    description:
      "Join our Bangladesh office as a Student Counsellor and play a pivotal role in guiding students towards their academic dreams. You'll provide personalized counseling, assist with university applications, course selection, and help students navigate their educational pathways with expert advice and support.",
    requirements: [
      "Experience in educational counseling, student advising, or related field.",
      "Excellent interpersonal and active listening skills.",
      "Strong understanding of international education systems and admission processes.",
      "Ability to empathize with students and provide personalized guidance.",
      "Proficiency in English and Bengali languages.",
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
          <h2 className="h3 fw-bold text-dark mb-0">Vacant Positions</h2>
          <span className="text-muted">{filteredJobs.length} opportunities found</span>
        </div>

        <Row xs={1} md={2} lg={2} className="g-4 justify-content-center">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <Col key={idx} lg={6} md={6}>
                <Card 
                  className="h-100 border-0 shadow-sm transition-hover" 
                  style={{ 
                    borderRadius: "16px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer",
                    borderLeft: `5px solid ${job.location.includes('UK') ? '#40E687' : '#203A43'}`
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
                      <Badge 
                        className="me-2" 
                        style={{ 
                          backgroundColor: job.location.includes('UK') ? "#E8F5E9" : "#E3F2FD", 
                          color: job.location.includes('UK') ? "#2E7D32" : "#1976D2"
                        }}
                      >
                        <FaMapMarkerAlt className="me-1" /> {job.location}
                      </Badge>
                      <Badge 
                        style={{ 
                          backgroundColor: "#FFF3E0", 
                          color: "#F57C00"
                        }}
                      >
                        <FaBriefcase className="me-1" /> {job.type}
                      </Badge>
                    </div>

                    <Card.Title className="fw-bold mb-3 h4" style={{ color: "#203A43" }}>
                      {job.title}
                    </Card.Title>
                    
                    <div className="mb-3">
                      <h6 className="text-muted">For the {job.location.includes('UK') ? 'UK Office' : 'Bangladesh Office'}</h6>
                    </div>

                    <Card.Text className="text-muted mb-4" style={{ fontSize: "0.95rem", flex: 1 }}>
                      {job.description.substring(0, 140)}...
                    </Card.Text>

                    <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
                      <span className="fw-bold" style={{ color: "#203A43" }}>{job.salary}</span>
                      <Button 
                        variant="link" 
                        className="p-0 text-decoration-none fw-bold d-flex align-items-center"
                        style={{ color: "#203A43" }}
                      >
                        View Details <FaArrowRight size={12} className="ms-2" />
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

      {/* --- FOOTER SECTION --- */}
      <footer 
        style={{ 
          backgroundColor: "#203A43",
          color: "white",
          padding: "60px 0 30px",
          marginTop: "80px"
        }}
      >
        <Container>
          <Row className="text-center text-md-start">
            <Col md={6} className="mb-4">
              <h4 className="fw-bold mb-3">Join Our Team</h4>
              <p className="opacity-75" style={{ maxWidth: "500px" }}>
                At LYT Global, we believe in nurturing talent and providing opportunities 
                for growth. If you don't see a position that matches your skills but believe 
                you can contribute, send us your CV at:
              </p>
              <a 
                href="mailto:careers@lyt-global.com" 
                className="text-decoration-none fw-bold d-inline-flex align-items-center mt-2"
                style={{ color: "#40E687" }}
              >
                <FaEnvelope className="me-2" /> careers@lyt-global.com
              </a>
            </Col>
            <Col md={6} className="mb-4">
              <h5 className="fw-bold mb-3">Why Work With Us?</h5>
              <ul className="list-unstyled opacity-75">
                <li className="mb-2">• Competitive compensation packages</li>
                <li className="mb-2">• Professional development opportunities</li>
                <li className="mb-2">• Collaborative work environment</li>
                <li className="mb-2">• Make a real impact in education sector</li>
              </ul>
            </Col>
          </Row>
          <div className="text-center pt-4 mt-4 border-top border-secondary opacity-50">
            <p className="mb-0 small">© {new Date().getFullYear()} LYT Global. All rights reserved.</p>
          </div>
        </Container>
      </footer>

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
            <div className="mt-1">
              <Badge 
                bg="info" 
                className="mt-2"
                style={{ 
                  backgroundColor: selectedJob?.location.includes('UK') ? "#40E687" : "#203A43",
                  color: "white"
                }}
              >
                For the {selectedJob?.location.includes('UK') ? 'UK Office' : 'Bangladesh Office'}
              </Badge>
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

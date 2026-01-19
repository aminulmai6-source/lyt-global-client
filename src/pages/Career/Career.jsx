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
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/*
  NOTE: This file is a refactored, more accessible and clearer version of the original
  Career.jsx component. I have preserved the content (job titles, descriptions, requirements,
  apply instructions and emails) while improving structure, semantics, accessibility, and UX.
*/

/* ----------------------------------------------------------
   Job listings (content preserved from the original page)
   Keep this array content identical to the original repository
   if you intend to fully replace the file in-place.
   ---------------------------------------------------------- */
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
      "We're seeking an enthusiastic and knowledgeable Student Consultant to join our team in Sylhet. You'll be instrumental in guiding students through their academic journeys, providing expert advice on course selection, university applications, and career pathways. This role requires strong communication skills and a genuine passion for helping students achieve their educational goals.",
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
      "We're seeking a highly motivated Services Development Executive to join our team in London. You'll be responsible for identifying new Services opportunities, building strong client relationships, and driving revenue growth. This role requires a proactive approach to sales and a deep understanding of market dynamics.",
    requirements: [
      "Proven experience in Services development, sales, or a related field.",
      "Excellent communication, negotiation, and interpersonal skills.",
      "Ability to identify and cultivate new leads and opportunities.",
      "Strong understanding of sales principles and customer relationship management.",
      "Self-motivated with a results-driven approach.",
    ],
    applyInstructions:
      "Please send your CV and a brief cover letter outlining your relevant experience and why you are interested in this role to:",
    applyEmail: "info@lyt-global.com",
  },
  // Other positions from the original file (e.g. commented-out roles) have been left out here.
  // If you want to preserve every commented role exactly as in repo, paste them into this array.
];

export default function Career() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const navigate = useNavigate();

  // Filter jobs using useMemo for performance; still preserves content exactly.
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
    // If job has a specific applyEmail, open mail client with prefilled subject
    if (job?.applyEmail) {
      const subject = encodeURIComponent(`Application for ${job.title}`);
      window.location.href = `mailto:${job.applyEmail}?subject=${subject}`;
      return;
    }
    // fallback: navigate to the existing application route in the app
    navigate("/career/apply");
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // search is reactive, so no extra action needed; keep focus for accessibility
    }
  };

  return (
    <main className="mt-3" aria-labelledby="career-heading">
      <div className="container-fluid mt-5 bg-light bg-gradient shadow">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{ backgroundColor: "#29a469" }}
        >
          <div className="col-md-12 px-0">
            <h1 id="career-heading" className="pt-5 display-4 font-italic text-center">
              Career
            </h1>
            <p className="text-center text-light fst-italic mb-0">
              Join Our Team — discover current opportunities below
            </p>
          </div>
        </div>
      </div>

      <Container className="py-4">
        <section aria-labelledby="join-heading" className="mb-4">
          <h2 id="join-heading" className="text-center mb-3 text-uppercase fw-bold">
            Join Our Team
          </h2>
          <p className="text-center text-muted mb-4">
            We are looking for talented individuals who are passionate about innovation and creativity. Find your next career opportunity below.
          </p>

          <div className="d-flex justify-content-center mb-4">
            <Form onSubmit={(e) => e.preventDefault()} className="w-100 w-md-50">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search by title, location, or job type"
                  aria-label="Search jobs"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onSearchKeyDown}
                />
                <Button
                  variant="outline-secondary"
                  aria-label="Search"
                  onClick={() => {
                    // input is reactive; this keeps the button interactive for screen reader users
                    document.activeElement.blur();
                  }}
                >
                  <FaSearch /> <span className="ms-2">Search</span>
                </Button>
              </InputGroup>
            </Form>
          </div>
        </section>

        <section aria-labelledby="listings-heading">
          <h3 id="listings-heading" className="visually-hidden">
            Job listings
          </h3>

          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => (
                <Col key={idx}>
                  <article
                    className="h-100"
                    aria-labelledby={`job-title-${idx}`}
                    role="article"
                  >
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title id={`job-title-${idx}`} className="h5">
                          <FaBriefcase className="me-2" aria-hidden />
                          {job.title}
                        </Card.Title>

                        <div className="mb-2 text-muted small">
                          <span className="me-3">
                            <FaMapMarkerAlt className="me-1" aria-hidden />
                            {job.location}
                          </span>
                          <span>
                            <FaClock className="me-1" aria-hidden />
                            {job.type}
                          </span>
                        </div>

                        <Card.Text className="text-muted" style={{ flex: 1 }}>
                          {job.description.length > 150
                            ? `${job.description.substring(0, 150).trim()}…`
                            : job.description}
                        </Card.Text>

                        <div className="mt-3 d-flex align-items-center justify-content-between">
                          <div>
                            <Button
                              variant="dark"
                              onClick={() => handleShowDetails(job)}
                              aria-controls="job-details-modal"
                            >
                              Details
                            </Button>
                          </div>

                          <div className="text-end">
                            {job.salary && <Badge bg="secondary" className="me-2">{job.salary}</Badge>}
                            <Button
                              className="primaryBtn"
                              onClick={() => handleApplyClick(job)}
                              aria-label={`Apply for ${job.title}`}
                            >
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </article>
                </Col>
              ))
            ) : (
              <Col>
                <div className="p-5 text-center border rounded-3">
                  <p className="mb-2 fw-semibold">No jobs match your search criteria.</p>
                  <p className="text-muted mb-0">Try removing filters or checking back later.</p>
                </div>
              </Col>
            )}
          </Row>
        </section>

        {/* Job Details Modal */}
        <Modal
          id="job-details-modal"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="job-details-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="job-details-title">{selectedJob?.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p className="mb-1">
              <FaMapMarkerAlt className="me-2" /> <strong>Location:</strong> {selectedJob?.location}
            </p>
            <p className="mb-3">
              <FaClock className="me-2" /> <strong>Type:</strong> {selectedJob?.type}
            </p>

            <section aria-labelledby="job-desc-heading" className="mb-3">
              <h4 id="job-desc-heading" className="h6">Job description</h4>
              <p className="mb-2">{selectedJob?.description}</p>
            </section>

            <section aria-labelledby="job-req-heading" className="mb-3">
              <h4 id="job-req-heading" className="h6">Requirements</h4>
              <ul>
                {selectedJob?.requirements?.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </section>

            {selectedJob?.applyInstructions && (
              <section aria-labelledby="job-apply-heading">
                <h4 id="job-apply-heading" className="h6">To apply</h4>
                <p className="mb-1">{selectedJob.applyInstructions}</p>
                {selectedJob?.applyEmail && (
                  <p className="mb-0">
                    <a
                      href={`mailto:${selectedJob.applyEmail}`}
                      className="text-decoration-none"
                    >
                      <FaEnvelope className="me-2" />
                      {selectedJob.applyEmail}
                    </a>
                  </p>
                )}
              </section>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            {selectedJob && (
              <Button
                className="primaryBtn"
                onClick={() => {
                  handleApplyClick(selectedJob);
                  setShowModal(false);
                }}
                aria-label={`Apply for ${selectedJob.title}`}
              >
                Apply Now
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </Container>
    </main>
  );
}

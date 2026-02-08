// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import HeaderNav from "../../components/Shared/HeaderNav/HeaderNav";
// import {
//   Card,
//   Col,
//   Container,
//   FloatingLabel,
//   Form,
//   Row,
// } from "react-bootstrap";
// import Swal from "sweetalert2";

// const ContactUs = () => {
//   const [formStatus, setFormStatus] = useState(null);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     // formData.append("access_key", "c9c2c922-8944-41b5-a6a7-248302ad649f");
//     formData.append("access_key", "dd9029fb-6415-463a-8c6f-435bcebf0930");

//     const json = JSON.stringify(Object.fromEntries(formData));

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: json,
//       });
//       const data = await res.json();

//       if (data.success) {
//         Swal.fire({
//           title: "Submitted!",
//           text: "Thank you for your message. We'll get back to you soon.",
//           icon: "success",
//           confirmButtonText: "Got It!",
//           customClass: {
//             confirmButton: "primaryBtn",
//           },
//         });
//       } else {
//         setFormStatus("Failed to send the message. Please try again.");
//       }
//     } catch (error) {
//       setFormStatus("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <HeaderNav />
//       <div className="container-fluid mt-5 bg-light bg-gradient shadow">
//         <div
//           className="p-4 p-md-5 mb-4 text-white rounded featured"
//           style={{ backgroundColor: "#29a469" }}
//         >
//           <div className="col-md-12 px-0">
//             <h1 className="pt-5 display-4 font-italic text-center">
//               Contact <span className="text-success"></span> Us
//             </h1>
//           </div>
//         </div>
//       </div>
//       <section className="contact pt-5">
//         <Container>
//           <Row className="py-5 align-items-center">
//             <Col xl="6" md="6" className="d-none d-md-block">
//               {/* <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.907591932802!2d-0.06224322373088795!3d51.51491131015497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760332b316a367%3A0x7e78a35e9e8f9657!2s205%20Commercial%20Rd%2C%20London%20E1%202BT!5e0!3m2!1sen!2suk!4v1737243698874!5m2!1sen!2suk"
//                 width="600"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe> */}
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.042037442841!2d0.0379896!3d51.530788799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c8d52bc857%3A0xcc9a286b76d48673!2s2%2C%20569%20Green%20St%2C%20London%20E13%209BF!5e0!3m2!1sen!2suk!4v1752366804998!5m2!1sen!2suk"
//                 width="600"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowfullscreen=""
//                 loading="lazy"
//                 referrerpolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </Col>
//             <Col xl="6" md="6">
//               <Card className="bg-light p-4 border-0 shadow-sm">
//                 <Form onSubmit={onSubmit}>
//                   <h1>If you have any Query</h1>
//                   <h1 className="h3 font-semibold mb-4">Send us a message</h1>
//                   <Row>
//                     <Col md="6">
//                       <FloatingLabel
//                         controlId="name"
//                         label="Full Name"
//                         className="mb-4"
//                       >
//                         <Form.Control
//                           type="text"
//                           name="name"
//                           placeholder="Full Name"
//                           required
//                         />
//                       </FloatingLabel>
//                     </Col>
//                     <Col md="6">
//                       <FloatingLabel
//                         controlId="email"
//                         label="Email Address"
//                         className="mb-4"
//                       >
//                         <Form.Control
//                           type="email"
//                           name="email"
//                           placeholder="name@example.com"
//                           required
//                         />
//                       </FloatingLabel>
//                     </Col>
//                     <Col md="12">
//                       <FloatingLabel
//                         controlId="phone"
//                         label="Phone Number"
//                         className="mb-4"
//                       >
//                         <Form.Control
//                           type="text"
//                           name="phone"
//                           placeholder="Phone Number"
//                         />
//                       </FloatingLabel>
//                     </Col>
//                     <Col md="12">
//                       <FloatingLabel controlId="message" label="Message">
//                         <Form.Control
//                           as="textarea"
//                           name="message"
//                           placeholder="Your Message"
//                           style={{ height: "126px" }}
//                           required
//                         />
//                       </FloatingLabel>
//                     </Col>
//                   </Row>
//                   <button className="primaryBtn mt-3" type="submit">
//                     Send Message
//                   </button>
//                   {formStatus && <p className="mt-3">{formStatus}</p>}
//                 </Form>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default ContactUs;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HeaderNav from "../../components/Shared/HeaderNav/HeaderNav";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button, // Make sure Button is imported if you're using react-bootstrap's Button component
} from "react-bootstrap";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons

// Import your CSS file
import "./ContactUs.css";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dd9029fb-6415-463a-8c6f-435bcebf0930");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: json,
      });
      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Submitted!",
          text: "Thank you for your message. We'll get back to you soon.",
          icon: "success",
          confirmButtonText: "Got It!",
          customClass: {
            confirmButton: "primaryBtn",
          },
        });
        // Clear form after successful submission
        event.target.reset();
      } else {
        setFormStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 bg-light bg-gradient shadow">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{ backgroundColor: "#29a469" }}
        >
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center">
              Contact US
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area: Contact Info on Left, Form on Right */}
      <Container className="contact-content-container my-5">
        <Row className="justify-content-center">
          <Col lg={12} xl={8}>
            {" "}
            {/* Adjust column sizes for overall content width */}
            <div className="contact-card-container shadow-sm p-4 p-md-5">
              <Row>
                <Col md={8} className="contact-info-column pr-md-4">
                  <h3 className="mb-4 contact-info-heading">
                    Contact Information
                  </h3>

                  <div className="contact-item mb-3">
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="contact-icon text-success"
                    />
                    <div>
                      <p className="mb-1 text-muted">
                        Do you need help? Just Call Us
                      </p>
                      <p className="mb-0">
                        <li>
                          UK OFFICE:
                          <a
                            href="tel:+442036338971"
                            className="contact-link text-black"
                          >
                            +442036338971
                          </a>
                        </li>
                        <li>
                          BANGLADESH OFFICE:
                          <a
                            href="tel:+8801918388086"
                            className="contact-link text-black"
                          >
                            +8801918388086
                          </a>{" "}
                        </li>
                        {/* IMPORTANT: Add Bangladesh number and make it clickable */}
                      </p>
                    </div>
                  </div>

                  <div className="contact-item mb-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact-icon text-success"
                    />
                    <div>
                      <p className="mb-1 text-muted">
                        Do you need help? Just Email Us
                      </p>
                      <p className="mb-0">
                        <li className="font-bold">
                          For Admission:{" "}
                          <a
                            href="mailto:admission@lyt-global.com"
                            className="contact-link text-black"
                          >
                            admission@lyt-global.com
                          </a>
                        </li>
                        <li className="font-bold">
                          For general Inquiry:
                          <a
                            href="mailto:info@lyt-global.com"
                            className="contact-link text-black"
                          >
                            info@lyt-global.com
                          </a>
                        </li>
                        <li className="font-bold">
                          Business Inquiry:
                          <a
                            href="mailto: business@lyt-global.com"
                            className="contact-link text-black"
                          >
                            business@lyt-global.com
                          </a>
                        </li>
                        <li className="font-bold">
                          For partnership:
                          <a
                            href="mailto:sales@lyt-global.com"
                            className="contact-link text-black"
                          >
                            sales@lyt-global.com
                          </a>
                        </li>
                        <br />
                      </p>
                    </div>
                  </div>

                  {/* Office Locations */}
                  <h4 className="mt-4 mb-3 contact-office-heading">
                    Our Offices:
                  </h4>
                  <div className="contact-item mb-3">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="contact-icon text-success"
                    />
                    <div>
                      <p className="mb-1">
                        <strong>UK Office:</strong>
                      </p>
                      <p className="mb-0">
                        Unit 2, 569 Green St, London E13 9BF
                      </p>
                    </div>
                  </div>

                  <div className="contact-item mb-3">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="contact-icon text-success"
                    />
                    <div>
                      <p className="mb-1">
                        <strong>Bangladesh Office:</strong>
                      </p>
                      <p className="mb-0">
                        Manru Tower Chowhatta, Sylhet, Bangladesh
                      </p>
                    </div>
                  </div>
                </Col>

                {/* Right Column: Talk To Our Expert Form - Adapted to current form fields */}
                <Col md={4} className="contact-form-column pl-md-4">
                  <h3 className="mb-4 contact-form-heading">
                    Talk To Our Expert!
                  </h3>
                  <Form onSubmit={onSubmit}>
                    <Form.Group controlId="name" className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Full Name *"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="phone" className="mb-3">
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Your Mobile No *"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="email" className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email Id *"
                        required
                      />
                    </Form.Group>
                    {/* Adding a select dropdown for "Preferred Study Level" similar to the example */}
                    <Form.Group
                      controlId="preferredStudyLevel"
                      className="mb-3"
                    >
                      <Form.Select name="preferredStudyLevel">
                        <option value="">Preferred Study Level *</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="PhD">PhD</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                    {/* Checkboxes for terms and SMS */}
                    <Form.Group controlId="agreeTerms" className="mb-2">
                      <Form.Check
                        type="checkbox"
                        name="agreeTerms" // Add name for web3forms
                        label={
                          <>
                            I agree to LYT Global{" "}
                            <a
                              href="/terms-and-conditions"
                              target="_blank"
                              className="text-success"
                            >
                              Terms and Privacy Policy
                            </a>
                          </>
                        }
                        required // Typically terms agreement is required
                      />
                    </Form.Group>
                    <Form.Group controlId="agreeSms" className="mb-4">
                      <Form.Check
                        type="checkbox"
                        name="agreeSms" // Add name for web3forms
                        label="Please contact me by phone, email or SMS to assist with my enquiry"
                      />
                    </Form.Group>
                    <Button
                      variant="success"
                      type="submit"
                      className="submit-button"
                    >
                      Submit
                    </Button>
                    {formStatus && (
                      <p className="mt-3 text-center">{formStatus}</p>
                    )}{" "}
                    {/* Center status message */}
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Embedded Map Section - placed below the main contact card as per the example */}
      <Container className="my-5">
        <h3 className="text-center mb-4 map-heading">Find Us on the Map</h3>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <div className="map-container shadow-sm rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.042037442841!2d0.0379896!3d51.530788799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c8d52bc857%3A0xcc9a286b76d48673!2s2%2C%20569%20Green%20St%2C%20London%20E13%209BF!5e0!3m2!1sen!2suk!4v1752366804998!5m2!1sen!2suk"
                width="750"
                height="450"
                style={{ border: 0 }}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Note: The footer is assumed to be a separate component rendered outside this page component */}
    </>
  );
};

export default ContactUs;

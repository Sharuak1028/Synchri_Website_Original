import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import '../Styles/ContactUs.css';

export default function ContactUs() {
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    console.log('Callback request:', callbackForm);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry:', enquiryForm);
  };
  return ( 
    <section className="contact-section" id="contact">
        {/* Decorative background blobs */}
        <div className="contact-decor-blob blob-top-right"></div>
        <div className="contact-decor-blob blob-bottom-left"></div>

        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <div className="contact-badge">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="contact-title">
              Ready to Automate
              <br />
              <span className="contact-title-gradient">
                Your Trading Strategy?
              </span>
            </h2>
            <p className="contact-subtitle">
              Let's discuss your custom EA development project
            </p>
          </div>

          {/* Main Card */}
          <div className="contact-main-card">
            <div className="contact-grid">
              
              {/* 1. Quick Callback Request Form */}
              <div className="contact-col contact-col-callback">
                <h3 className="contact-col-title">
                  Quick Callback Request
                </h3>
                <form onSubmit={handleCallbackSubmit} className="contact-form">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={callbackForm.name}
                    onChange={(e) => setCallbackForm({...callbackForm, name: e.target.value})}
                    className="contact-input"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile"
                    value={callbackForm.mobile}
                    onChange={(e) => setCallbackForm({...callbackForm, mobile: e.target.value})}
                    className="contact-input"
                  />
                  <input
                    type="email"
                    placeholder="Email ID"
                    value={callbackForm.email}
                    onChange={(e) => setCallbackForm({...callbackForm, email: e.target.value})}
                    className="contact-input"
                  />
                  <button type="submit" className="contact-btn btn-teal">
                    Submit now
                  </button>
                </form>
              </div>

              {/* 2. Project Inquiry Form */}
              <div className="contact-col contact-col-inquiry">
                <h3 className="contact-col-title">
                  Project Inquiry
                </h3>
                <form onSubmit={handleEnquirySubmit} className="contact-form">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                    className="contact-input"
                  />
                  <input
                    type="email"
                    placeholder="Email ID"
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
                    className="contact-input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={enquiryForm.mobile}
                    onChange={(e) => setEnquiryForm({...enquiryForm, mobile: e.target.value})}
                    className="contact-input"
                  />
                  <textarea
                    placeholder="Tell us about your trading strategy and EA requirements"
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({...enquiryForm, message: e.target.value})}
                    className="contact-input contact-textarea"
                  />
                  <button type="submit" className="contact-btn btn-gradient">
                    Send Inquiry
                  </button>
                </form>
              </div>

              {/* 3. Contact Information */}
              <div className="contact-col contact-col-info">
                <h3 className="contact-col-title">
                  Contact Information
                </h3>
                
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <MapPin className="contact-icon" />
                    <div className="contact-info-text">
                      <p className="info-label">2nd Floor, Chowallur Tower, West Fort, Thrissur, Pin:680004</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <Phone className="contact-icon" />
                    <div className="contact-info-text">
                      <p className="info-label">Phone:</p>
                      <p className="info-value">+1234 5678 9101</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <Mail className="contact-icon" />
                    <div className="contact-info-text">
                      <p className="info-label">Email:</p>
                      <p className="info-value">contact@company.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact-socials-section">
                  <h4 className="contact-socials-title">Connect with Us</h4>
                  <div className="contact-socials-row">
                    <a href="#" className="social-link" aria-label="Facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="social-link" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  );
}

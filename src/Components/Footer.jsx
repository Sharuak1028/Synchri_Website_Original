import React from "react";
import "../Styles/Footer.css";
import { Linkedin, Twitter, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";


export default function Footer() {
    return (
        <footer className="footer-wrapper">

            {/* Background overlay */}
            <div className="footer-bg"></div>

            <div className="footer-container">

                {/* LEFT LARGE CARD */}
                <div className="footer-card-left">
                    <div className="footer-left-grid">

                        {/* Logo + Tagline Column */}
                        <div className="footer-left-col">
                            <div className="footer-logo-wrap">
                                <img src="/images/Synchri_Sample_logo.png" alt="Logo" className="footer-logo" />
                                <div>
                                    <h3 className="footer-logo-title">Synchri</h3>
                                    <span className="footer-logo-sub">Technology</span>
                                </div>
                            </div>

                            <p className="footer-tagline">
                                Synchronizing <br />
                                Intelligence with <br />
                                Innovation
                            </p>
                        </div>

                        {/* Solutions Column */}
                        <div className="footer-left-col">
                            <h4 className="footer-heading">Solutions</h4>
                            <a href="#" className="footer-link">EA Development</a>
                            <a href="#" className="footer-link">Trading</a>
                            <a href="#" className="footer-link">Automation</a>
                        </div>

                        {/* Company Column */}
                        <div className="footer-left-col">
                            <h4 className="footer-heading">Company</h4>
                            <a href="#" className="footer-link">About Us</a>
                            <a href="#" className="footer-link">Why Trust Us?</a>
                            <a href="#" className="footer-link">Blog</a>
                        </div>

                        {/* Legal Column */}
                        <div className="footer-left-col">
                            <h4 className="footer-heading">Legal</h4>
                            <a href="#" className="footer-link">Privacy Policy</a>
                            <a href="#" className="footer-link">Terms Policy</a>
                            <a href="#" className="footer-link">Terms of Service</a>
                        </div>

                    </div>




                </div>

                {/* RIGHT SMALL CARD */}
                <div className="footer-card-right">
                    <h4 className="footer-right-title">Get in Touch</h4>

                    <div className="footer-contact-item">
                        <Phone className="footer-contact-icon" />
                        <div>
                            <p className="footer-contact-text">+(91)79-0764-3427</p>
                            <p className="footer-contact-text">services@synchriitech.com</p>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <MapPin className="footer-contact-icon" />
                        <p className="footer-contact-text">kerala innovative technology and competitive zone, 51/2384-58, KITEZ BUSINESS ZONE,
                            Poothole-680004</p>
                    </div>

                    <div className="footer-social">
                        <Linkedin className="footer-social-icon" />
                        <Twitter className="footer-social-icon" />
                        <Facebook className="footer-social-icon" />
                        <Instagram className="footer-social-icon" />
                    </div>
                </div>
                <hr className="footer-divider" />
                <p className="footer-copyright">
                    © 2024 Synchri Technology. All Terms of Reserved.
                </p>
            </div>

        </footer>
    );
}
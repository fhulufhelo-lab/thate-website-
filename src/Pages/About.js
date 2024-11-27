import React, { useState, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import { FaCheckCircle } from "react-icons/fa";
import VisionImage from '../assest/Vision.jpg';
import BBBEEImage from '../assest/BBEE.jpg';
import "./About.css";

function About() {
  const [showButton, setShowButton] = useState(false);

    // Handle scroll to toggle visibility of the button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <MainLayout>
      {/* Header Section */}
      <header className="about-header">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </header>

      {/* Vision Section */}
      <section className="about-section vision-section">
        <div className="container grid-layout">
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>
              To become a preferred electrical services, products and solutions provider in South Africa,
              focusing on quality delivery and environmental safety.
            </p>
          </div>
          <div className="image-content">
            <img
              src={VisionImage}
              alt="Our Vision"
              className="responsive-img"
            />
          </div>
        </div>
      </section>

      {/* BBBEE Status Section */}
      <section className="about-section bbb-status-section">
        <div className="container grid-layout reverse-grid">
          <div className="image-content">
            <img
              src={BBBEEImage}
              alt="BBBEE Status"
              className="responsive-img"
            />
          </div>
          <div className="text-content">
            <h2>BBBEE Status</h2>
            <p>
              As a Level 3 BBBEE company, 100% Black-owned, we are committed to fostering inclusivity, diversity, and empowerment through sustainable practices and impactful community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="about-section company-info-section">
        <div className="container">
          <h2>Company Information</h2>
          <div className="grid-layout">
            <div className="text-content">
              <p>
                Thate Electrical was founded in 2007 to meet the electrical demands and supplies of the
                Commercial Building, Public Building and Infrastructure, Alternate Power Generation, and
                general industrial markets in South Africa.
              </p>
              <ul className="no-bullets">
                <li><FaCheckCircle className="tick-icon" /> Registred Company</li>
                <li><FaCheckCircle className="tick-icon" /> Fix the vat</li>
              </ul>
            </div>
            <div className="image-content">
              {/* Replace with your Google Maps embed link */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.0860704914458!2d28.148910474626458!3d-26.1938782635521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95119916ea01f7%3A0x90df378cb22c6039!2s55%20Rietfontein%20Rd%2C%20Primrose%2C%20Johannesburg%2C%201401!5e0!3m2!1sen!2sza!4v1732377575071!5m2!1sen!2sza"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="about-section values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Safety</h3>
              <p>
                This is our top priority and we promote the fundamental belief that
                productivity is not a trade - o for safety. We, therefore, conduct our business in a safe,
                environmentally sensitive, cost effective and responsible manner.
              </p>
            </div>
            <div className="value-item">
              <h3>Quality</h3>
              <p>
                We are committed to provide customers with defect - free products and as a
                business we believe in continuous improvement..
              </p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>
                We adhere to the highest ethical standards, ensuring trust and
                transparency in every interaction.
              </p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>
                Striving for perfection in every project, no matter how
                challenging.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Back to Top Button */}
      {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    &#8679;
                </button>
            )}
    </MainLayout>
  );
}

export default About;

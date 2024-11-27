import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import './ContactUs.css';

function ContactUs() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

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
    <div className="contact-container">
        <section className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa fa-phone contact-icon"></i>
              <h3>Phone</h3>
              <p>
                <a href="tel:+1234567890">011 074 5999 </a>
              </p>
            </div>
            <div className="contact-item">
              <i className="fa fa-envelope contact-icon"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@yourcompany.com">sales@thate.co.za</a>
              </p>
            </div>
            {/* Replacing Address with Download Profile */}
            <div className="contact-item">
              <i className="fa fa-download contact-icon"></i>
              <h3>Download Company Profile</h3>
              <p>
                {/* Updated anchor tag to trigger file download */}
                <a
                  href={`${process.env.PUBLIC_URL}/Thate Pfofile 2023.pdf`} // Replace with actual path
                  download
                >
                  Click here to download our company profile.
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="quote-request">
          {/* Update the button to navigate to the Request Quote page */}
          <button className="quote-btn" onClick={() => navigate('/Request')}>
            Request a Quote
          </button>
        </section>
      </div>

      {/* Back to Top Button */}
      {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    &#8679;
                </button>
            )}
    </MainLayout>
  )
}

export default ContactUs;

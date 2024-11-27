import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import './Service.css'
import MainLayout from '../Layout/MainLayout';
import Logo from '../assest/Shomang.png';
import Logo1 from '../assest/Life.png';
import Logo2 from '../assest/shellcase.png';
import Logo3 from '../assest/Fnb.png';
import Logo4 from '../assest/Uni.png';

import Pro1 from '../assest/in.jpg';
import Pro2 from '../assest/de.jpg';
import Pro3 from '../assest/Maintenance.jpg';
import Pro4 from '../assest/consulting.jpg';
import Pro5 from '../assest/COC.jpg';
import Pro6 from '../assest/hero3.jpg';
function Services() {
  const clientLogos = [
    { id: 1, src: Logo, alt: "Client 1" },
    { id: 2, src: Logo1, alt: "Client 2" },
    { id: 3, src: Logo2, alt: "Client 3" },
    { id: 4, src: Logo3, alt: "Client 4" },
    { id: 5, src: Logo4, alt: "Client 5" },
    // Add more logos as needed
  ];

  const pastProjects = [
    {
      id: 1,
      image: Pro1,
      name: "Electrical Installation",
      description: <p>We specialize in the expert installation of lighting, wiring, panels, and various electrical systems. Their experienced team ensures every installation is completed with the highest standards of safety, efficiency, and compliance. They provide reliable solutions for residential, commercial, and industrial projects, delivering quality service tailored to meet specific client needs.</p>,
    },
    {
      id: 2,
      image: Pro2,
      name: "Electrical Design",
      description: <p>We specialize in the design of power systems and electrical distribution, including load and current calculations, detailed layouts for electrical devices and rooms, and coordination of connections to mechanical equipment and controls.</p>,
    },
    {
      id: 3,
      image: Pro3,
      name: "Maintaince Services",
      description: <p>We offer 24 - hour emergency service, troubleshooting, field engineering
      liaison and inspection, commissioning and checkout, customer representation at
      acceptance testing of equipment, preventive maintenance programmes.</p>,
    },
    {
      id: 3,
      image: Pro4,
      name: "Consulting Services",
      description: <p>We work closely and collaboratively with clients in the construction industry to provide a wide range of electrical services, products, and solutions. Our team is dedicated to understanding each client's unique needs, ensuring that we deliver tailored, reliable, and cost-effective electrical solutions that meet industry standards and project requirements.</p>,
    },
    {
      id: 3,
      image: Pro5,
      name: "Commercial and Industrial COC",
      description: <p>we provide Certificate of Compliance (COC) services, ensuring that all electrical installations meet the required safety standards and regulations. Our team conducts thorough inspections and issues COCs for residential, commercial, and industrial projects, giving clients peace of mind that their electrical systems are compliant and safe.</p>,
    },
    {
      id: 3,
      image: Pro6,
      name: "Electrical product supplier",
      description: <p>We offer a wide range of electrical materials, including high-quality lighting, wiring, cables, and components, sourced from trusted manufacturers to ensure reliability and industry compliance. Whether for residential, commercial, or industrial projects, Thate Electrical provides the essential materials for efficient, safe installations, backed by expert guidance and competitive pricing.</p>,
    },
    // Add more projects as needed
  ];

  // Slider settings for auto-rotation
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
      <section id="services" className="services-section">
      {/* Past Projects */}
      <div className="past-projects">
        <h2>Services</h2>
        <div className="project-grid">
          {pastProjects.map((project) => (
            <div key={project.id} className="project">
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Client Logos Slideshow */}
      <div className="clients-carousel">
        <h2>Our Clients</h2>
        <Slider {...settings}>
          {clientLogos.map((logo) => (
            <div key={logo.id} className="carousel-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
    {/* Back to Top Button */}
    {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    &#8679;
                </button>
            )}
  </MainLayout>
  )
}


export default Services
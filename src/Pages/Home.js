import React, { useState, useEffect } from "react";

import MainLayout from "../Layout/MainLayout";
import "./Home.css";

// Import the images
import heroImage from "../assest/try2.jpg"; // Make sure to use your actual file name consulting 
import secondImage from "../assest/hero1.jpg"; // Another image (replace with your file) design
import thirdImage from "../assest/consulting.jpg"; // Another image (replace with your file) suplliers
import award1 from "../assest/award1.png";
import award2 from "../assest/award2.png";
import award3 from "../assest/award3.png";
function Home() {
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
    const slides = [
        {
            id: 1,
            title: "Thate Electrical Supplies",
            subtitle: "Construction services",
            description:
                "We work collaboratively with clients in the construction industry to offer electrical services, products and solutions.",
            image: heroImage, // Using the imported image
        },
        {
            id: 2,
            //   title: "Another Slide",
            subtitle: "Power infrastructure design",
            description: "Design and management of power systems, life safety systems, energy-efficient lighting, and electrical distribution, including calculations, layouts, project analysis, and adherence to industry standards.",
            image: secondImage, // Using another imported image
        },
        {
            id: 3,
            //   title: "Consulting Services",
            subtitle: "Consulting Services",
            description: "Thate Electrical adds value to its clients’ projects by offering world - class consulting services.",
            image: thirdImage, // Using another imported image
        },
    ];
    // Awards Data
    const awards = [
        {
            id: 1,
            title: "Award Recieved for 2022",
            description:
                "#20 most Popular Home improvement Specialist in Primrose",
            image: award1, // Replace with actual image path
            link: "https://homeimprovement4u.co.za/directory/location/gauteng/ekurhuleni-germiston/germiston/primrose/most-popular/2022/",
        },
        {
            id: 2,
            title: "Award Recieved for 2021",
            description:
                "#16 most Popular Home improvement Specialist in Primrose",
            image: award2, // Replace with actual image path
            link: "https://homeimprovement4u.co.za/directory/location/gauteng/ekurhuleni-germiston/germiston/primrose/most-popular/2021/",
        },
        {
            id: 3,
            title: "Award Recieved for 2020",
            description:
                "#11 most Popular Home improvement Specialist in Primrose",
            image: award3, // Replace with actual image path
            link: "https://www.homeimprovement4u.co.za/directory/location/gauteng/ekurhuleni-germiston/germiston/primrose/most-popular/2020/",
        },
    ];
    const services = [
        {
            id: 1,
            title: "Electrical Installation",
            description:
                "We provide comprehensive electrical installations, ensuring safety and compliance with industry standards.",
            icon: "⚡", // Can be replaced with icons from libraries like FontAwesome
        },
        {
            id: 2,
            title: "Construction Services",
            description:
                "Collaborative work with clients in the construction industry to offer electrical services, products, and solutions.",
            icon: "🏗️", // Replace with icons from libraries like FontAwesome
        },
        {
            id: 2,
            title: "Consulting Services",
            description:
                "We provide site visits, consultations, integration of electrical systems with architecture and mechanics, functional analysis, value engineering, feasibility studies, and master planning",
            icon: "💼", // Replace with icons from libraries like FontAwesome
        },
        {
            id: 3,
            title: "Design Services",
            description:
                "We specializes in power system design, load calculations, Life Safety Systems, energy-efficient lighting, cost estimates, design analysis, and project scheduling.",
            icon: "📝", // Replace with icons from libraries like FontAwesome
        },
        {
            id: 4,
            title: "Maintenance Services",
            description:
                "Our maintenance services are 24-hour emergency service, troubleshooting, field engineering support, equipment inspection, commissioning, acceptance testing, and preventive maintenance programs.",
            icon: "🔧", // Replace with icons from libraries like FontAwesome
        },
        {
            id: 5,
            title: "Commercial & Industrial COC",
            description:
                "We offer Certificate of Compliance (COC) services for industrial and commercial electrical installations, ensuring that all electrical systems comply with safety regulations and standards for safe operation in these environments.",
            icon: "🏭", // Replace with icons from libraries like FontAwesome
        },

    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <MainLayout>

            <div className="carousel">
                <div
                    className="carousel-inner"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((slide) => (
                        <div className="carousel-item" key={slide.id}>
                            <img src={slide.image} alt={slide.title} className="carousel-image" />
                            <div className="carousel-content">
                                <h2>{slide.title}</h2>
                                <h3>{slide.subtitle}</h3>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control prev" onClick={prevSlide}>
                    &#8592;
                </button>
                <button className="carousel-control next" onClick={nextSlide}>
                    &#8594;
                </button>
            </div>
            {/* Services Section */}
            <section className="services">
                <h2 className="section-title">Our Services</h2>
                <div className="services-list">
                    {services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <div className="how-it-works">
                <h2 className="section-title">How It Works</h2>
                <div className="how-it-works-steps">
                    {/* Choose Service Step */}
                    <div className="step">
                        <div className="step-icon">
                            <i className="fas fa-cogs"></i> {/* You can replace this icon */}
                        </div>
                        <h3>Choose Your Service</h3>
                        <p>Select the service that suits your needs from our wide range of offerings. We provide electrical distribution, consulting, and more.</p>
                    </div>

                    {/* Get in Touch Step */}
                    <div className="step">
                        <div className="step-icon">
                            <i className="fas fa-phone-alt"></i> {/* Replace with a relevant icon */}
                        </div>
                        <h3>Get In Touch With Us</h3>
                        <p>Contact us through our website, email, or phone. Our team is here to guide you through the process and answer all your questions.</p>
                    </div>

                    {/* Additional Step */}
                    <div className="step">
                        <div className="step-icon">
                            <i className="fas fa-check-circle"></i> {/* Replace with a relevant icon */}
                        </div>
                        <h3>Experience the Service</h3>
                        <p>Once you've chosen and contacted us, we deliver top-quality service tailored to your needs. We ensure satisfaction every step of the way.</p>
                    </div>
                </div>
            </div>
            {/* Awards Section */}
            <div className="awards">
                <h2 className="section-title">Awards</h2>

                <div className="awards-list">
                    {awards.map((award) => (
                        <div className="award-card" key={award.id}>
                            <h3>{award.title}</h3>
                            <img src={award.image} alt={award.title} className="award-icon" />
                            <a href={award.link} className="award-description">{award.description}</a>
                        </div>
                    ))}
                </div>
            </div>
            {/* Back to Top Button */}
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    &#8679;
                </button>
            )}
        </MainLayout>
    );
}

export default Home;

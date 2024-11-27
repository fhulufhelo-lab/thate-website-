import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import './Request.css';
import MainLayout from '../Layout/MainLayout';

const Request = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6b87eb28-0787-44ae-bff7-d2d669b65561");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Quote request sent successfully",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    service: '',
    suburb: '',
    when: '',
    budget: '',
    message: '',
    terms: false,
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

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
    service: Yup.string().required('Please select a service'),

    suburb: Yup.string().required('Suburb is required'),
    when: Yup.string().required('Please specify when you want the work done'),
    budget: Yup.string().required('Please specify your budget'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and privacy policy').required('Please accept the terms and privacy policy'),
  });

 

  return (
    <MainLayout>
      <div className="request-quote-container">
        <h2>Request a Quote</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="request-quote-form" onSubmit={onSubmit}>
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <Field type="text" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="service">Service Required</label>
              <Field as="select" id="service" name="service">
                <option value="">Select a service</option>
                <option value="electrical">Electrical Installation</option>
                <option value="construction">Construction Services</option>
                <option value="consulting">Consulting Services</option>
                <option value="maintenance">Maintenance Services</option>
              </Field>
              <ErrorMessage name="service" component="div" className="error-message" />
            </div>


            {/* Suburb */}
            <div className="form-field">
              <label htmlFor="suburb">Suburb Where Work Will Be Done</label>
              <Field type="text" id="suburb" name="suburb" />
              <ErrorMessage name="suburb" component="div" className="error-message" />
            </div>

            {/* When to Do the Work */}
            <div className="form-field">
              <label htmlFor="when">When Would You Like the Work Done?</label>
              <Field as="select" id="when" name="when">
                <option value="">Select a timeframe</option>
                <option value="urgent">Urgent</option>
                <option value="thisWeek">This Week</option>
                <option value="next2Weeks">Next 2 Weeks</option>
                <option value="thisMonth">This Month</option>
                <option value="next3Weeks">Next 3 Weeks</option>
                <option value="flexible">I'm Flexible</option>
              </Field>
              <ErrorMessage name="when" component="div" className="error-message" />
            </div>

            {/* Budget */}
            <div className="form-field">
              <label htmlFor="budget">Budget</label>
              <Field type="text" id="budget" name="budget" />
              <ErrorMessage name="budget" component="div" className="error-message" />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            {/* Terms and Conditions */}
            <div className="form-field checkbox-container">
              <Field
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label htmlFor="terms" className='terms'>
                I accept the <a href="/terms" target="_blank">Terms of Use</a> and <a href="/privacy-policy" target="_blank">Privacy Policy</a>
              </label>
              <ErrorMessage name="terms" component="div" className="error-message" />
            </div>


            <button type="submit" className="submit-button">Submit</button>
          </Form>
        </Formik>
      </div>
       {/* Back to Top Button */}
       {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    &#8679;
                </button>
            )}
    </MainLayout>
  );
};

export default Request;

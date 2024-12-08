import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";


const ContactPage = () => {
  return (
    <div className="contact-page " id="contact-page">
      <div className="contact-section ">
        <ContactForm />
      </div>
      <div className="info-section ">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;

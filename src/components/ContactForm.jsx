import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form ">
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          className="bg-slate-50"
          type="text"
          id="firstName"
          name="firstName"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          className="bg-slate-50"
          type="text"
          id="lastName"
          name="lastName"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          className="bg-slate-50"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          className="bg-slate-50"
          type="tel"
          id="phone"
          name="phone"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          className="bg-slate-50"
          id="message"
          name="message"
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit" id="btn">Submit</button>
    </form>
  );
};

export default ContactForm;

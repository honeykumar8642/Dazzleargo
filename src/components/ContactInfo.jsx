import React from "react";
import { FaEnvelope, FaPhone,FaLocationArrow} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-info ">
      <h2 id="get-in-touch"  className=" text-4xl font-semibold  text-white underline underline-offset-4 mr-36">
        GET IN TOUCH
      </h2>
      <p className="text-xl">
        {" "}
        We'd love to hear from you! Here’s how you can get in touch...
      </p>
       
      <div className="">
        <h4 className="flex relative   text-xl text-black">
          <FaEnvelope className="icon text-[orangered] m-1" />  : {" "}
          <a
            id="email"
            className="text-[1.4rem]"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dazzleagroenterprises@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            
          >
             
             dazzleagroenterprises@gmail.com
          </a>
        </h4> <br />
        <h4 id="email" className=" flex text-xl text-black">
          <FaPhone className="icon text-[orangered]" style={{ transform: "rotate(90deg)" }} /> :
          +91 7004744721
        </h4>  <br />
        <h4 className=" flex text-xl text-black">
          <img  src="https://i.imgur.com/kHhVuT9.png" style={{ height :"3vh", color: "orangered"}} className="icon text-[orangered]" /> :
          <a id="email" href="https://maps.app.goo.gl/tgb9oEkRr8euMTkq9?g_st=iwb" target="_blank">Ekbhinda, Near 32 No.Gumti, Bijali Halt, Darbhanga(BIHAR)</a>
        </h4>
       
      </div>
    </div>
  );
};

export default ContactInfo;

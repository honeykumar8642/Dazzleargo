import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#218380] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h5 className="text-2xl text-[orangered] font-semibold mb-4">Links</h5>
            <ul>
              <li className="mb-2 text-lg">
                <Link to="/" className="hover:underline hover:text-[orangered]">
                  Home
                </Link>
              </li>
              <li className="mb-2 text-lg">
                <Link to="/about" className="hover:underline hover:text-[orangered]">
                  About Us
                </Link>
              </li>
              <li className="mb-2 text-lg">
                <Link to="/fishes" className="hover:underline hover:text-[orangered]">
                  Aquatic Species
                </Link>
              </li>
              <li className="mb-2 text-lg">
                <Link to="/trading" className="hover:underline hover:text-[orangered]">
                  Trading
                </Link>
              </li>
              <li className="mb-2 text-lg">
                <Link to="/equipments" className="hover:underline hover:text-[orangered]">
                  Equipments
                </Link>
              </li>
              <li className="mb-2 text-lg">
                <Link to="/contact" className="hover:underline hover:text-[orangered]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
            <h5 className="text-2xl text-[orangered] font-semibold mb-4">Social Media</h5>
            <ul   className='flex align-middle  gap-3'>
              <li id='social-media' className="mb-2 text-lg">
                {/* <Link to="#" className="hover:underline hover:text-[orangered]">
                YouTube
                </Link> */}
                <a href="#" target='_blank'><FaYoutube style={{fontSize:"2rem"}}/></a>
              </li>
              <li id='social-media' className="mb-2 text-lg">
                {/* <Link to="#" className="hover:underline hover:text-[orangered]">
                  Instagram
                </Link> */}
                <a href="https://www.instagram.com/dazzleagro?igsh=MW9md3Y0d3AxcXRqcg==" target='_blank'><FaInstagram style={{fontSize:"2rem"}}/></a>
              </li>
              <li id='social-media' className="mb-2 text-lg">
                {/* <Link to="#" className="hover:underline hover:text-[orangered]">
                  Facebook
                </Link> */}
                <a href="https://www.facebook.com/profile.php?id=61561821269237" target='_blank'><FaFacebook style={{fontSize:"2rem"}}/></a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-2xl text-[orangered] font-semibold mb-4">Have a Questions?</h5>
            
            <p id='email-text' className=" text-lg hover:text-[orangered]"><a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dazzleagroenterprises@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email : dazzleagroenterprises@gmail.com
            </a></p>
            <p className=" text-lg hover:text-[orangered]">Phone : +91 7004744721</p>
            <p>UDYAM NO:- UDYAM-BR-10-0007541</p>
            <p>GSTIN:- 10AKPPY7898F1ZC</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-lg"> DazzleAgro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



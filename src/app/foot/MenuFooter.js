import React from "react";
import "./style.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

const MenuFooter = () => {
  return (
    <div className="mb-32 text-md">
      <div className="telFooter">
        <img src="/tel-footer.png" alt="tel footer" />

      </div> 
      <div className="flex items-center justify-center  text-text-color space-x-[130px] mt-10 mr-16 "> 
    
      <div >
          <p className="text">Today</p>
          <p className="text">Advance Booking</p>
          <p className="text">Coming Soon</p>
          <p className="text">Promotion</p>
          <p className="text">Event & Activity</p>
      </div>
      <div className="mb-auto">
          <p className="text">Information</p>
          <p className="text">Contact Us</p>
      </div>
      <div className="mb-auto">
          <p className="text">Privacy Policy</p>
          <p className="text">Term & Condition</p>
      </div>
      
      <div className="mb-auto ">
          <p className="text-text-color  mb-2  text">Follow us on</p>
          <div className="flex items-center space-x-3">
            
            <a href="https://web.facebook.com/embassycineplex?_rdc=1&_rdr" className="myIconFoot" target="_blank">
              <FaFacebookF className="iconFoot" />
            </a>
            <a href="https://twitter.com/embassycineplex" className="myIconFoot" target="_blank">
              <FaTwitter className="iconFoot" />
            </a>
            <a href="https://www.instagram.com/embassyscreens/" className="myIconFoot" target="_blank">
              <AiFillInstagram className="iconFoot" />
            </a>
            <a href="https://www.youtube.com/user/embassycineplex" className="myIconFoot" target="_blank">
              <TfiYoutube className="iconFoot" />
            </a>
          </div>
        </div>
        </div> 
    </div>
  );
};

export default MenuFooter;

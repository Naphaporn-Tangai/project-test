import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import "./style.css";
import Appbar from "./Appbar";

const Navbar = () => {
  return (
    <div >
        <div className="navbarOne">
        <div className="md:flex flex items-center justify-center mx-auto pr-5">
          <p className="text-text-color text-sm mr-3 flex">Follow us on</p>
          <div className="flex items-center space-x-2">
            
            <a href="https://web.facebook.com/embassycineplex?_rdc=1&_rdr" className="my-icon" target="_blank">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://twitter.com/embassycineplex" className="my-icon" target="_blank">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.instagram.com/embassyscreens/" className="my-icon" target="_blank">
              <AiFillInstagram className="icon" />
            </a>
            <a href="https://www.youtube.com/user/embassycineplex" className="my-icon" target="_blank">
              <TfiYoutube className="icon" />
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-2 mx-auto pl-1.5 flex-shrink-0">
          <p className="text-text-color text-sm mr-3">
            Get Embassy Screens app on
          </p>
          <div className="flex items-center space-x-2 ">
            <a href="https://apps.apple.com/th/app/embassy-screens/id882209348" target="_blank">
            <img
              src="http://www.embassycineplex.com/images/download_appstore.png"
              className="hover:opacity-50"
              alt="app store"
            />
            </a>
            <a href="https://play.google.com/store/apps/details?id=th.co.invp.EmbassyActivity&hl=en" target="_blank">
            <img
              src="http://www.embassycineplex.com/images/download_googleplay.png"
              className="hover:opacity-50"
              alt="google play"
            />
            </a>
          </div>
        </div>
      </div>
      

      <div className="logoImg">
        <img
          src="http://www.embassycineplex.com/images/logo.png"
          width="171"
          height="124"
          alt="Embassy"
        />
      </div>

      <Appbar />
    </div>
  );
};

export default Navbar;

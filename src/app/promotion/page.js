import React from "react";
import "./style.css";
import promotions from './data'
const Promotion = () => {
  return (
    <div>
      <div className="justify-center items-center flex pt-10 relative">
        <p className="absolute text-hover-text text-22">PROMOTION</p>
        <img src="/today.png" alt="today"  />
      </div>
      <div className="text_ mt-7 mb-12 ">
        <div>
          <p className="text_">
            Embassy Diplomat Screens brings you the highest quality
          </p>
          <p className="text_">
            in cinema at a reasonable price made possible by our exclusive
            partners;
          </p>
          <p className="text_">
            AIS, Bank of Ayudhya, Bangkok Bank, Pepsi, Central Credit Card,
            Jaguar Land rover, Federbräu.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-3  mx-auto w-[1024px] ">
      
      {promotions.map((promo, index) => (
        
        <div key={index} className="mb-10 ">
          <div className="flex items-center mb-3">
            <img src="calendar.png" alt="iconImg" />
            <p className="text-[#f1e3c2] ml-3 ">
              {promo.day}
            </p>
          </div>
          <img src={promo.Img} alt={promo.AltImg} />
          <p className="text-white w-[28ch] mt-3 ">
          {promo.title}
          </p>
          <p className="text-[#8e8e8e] w-[300px] text-[15px] mt-2">
          {promo.more}
          </p>
        </div>

      ))}
     
      </div>

      <div className="justify-center items-center flex pt-10 mb-10">
        <img src="/sponsor_logo.png" alt="sponsor" />
      </div>
    </div>
  );
};

export default Promotion;

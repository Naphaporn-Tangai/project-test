"use client";
import { useState } from "react";
import "./style.css";
import Link from "next/link";

const Seat = () => {
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);

  const decrementQuantity1 = () => {
    if (quantity1 > 0) {
      setQuantity1(quantity1 - 1);
    }
  };

  const incrementQuantity1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const handleChange1 = (event) => {
    setQuantity1(parseInt(event.target.value) || 0);
  };

  const decrementQuantity2 = () => {
    if (quantity2 > 0) {
      setQuantity2(quantity2 - 1);
    }
  };

  const incrementQuantity2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const handleChange2 = (event) => {
    setQuantity2(parseInt(event.target.value) || 0);
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Link href="/">
          <div className="w-[1024px] border-b border-[#7f6e47] pb-5 ">
            <img src="/btn-back.png" alt="back" className="hover:opacity-50" />
          </div>
        </Link>
      </div>
      <div>
        <div className="flex justify-center items-center mt-5">
          <img
            src="/transformer.jpg"
            alt="movie"
            className="w-[140px] h-[210px] "
          />
          <div className="ml-5 mb-auto">
            <p className="text-2xl text-[#f1e3c2] ">
              TRANSFORMERS: RISE OF THE BEASTS
            </p>

            <div className="flex items-center space-x-2 mt-3">
              <img src="/rate_1.png" alt="rate 1" className="w-10" />

              <img src="/type_digital.png" alt="rate 2" className="w-10" />
              <p className="text-[#b0b0b0] text-[17px]">2D</p>
            </div>
            <div className="flex items-center mt-5">
              <div className="table">
                <p className="text-[#8e8e8e] mr-3 ">Date</p>
                <p className="text-[#f1e3c2] ">09 June 2023</p>
              </div>
              <div className="table">
                <p className="text-[#8e8e8e] mr-3 ">Time</p>
                <p className="text-[#f1e3c2] ">19:00</p>
              </div>
              <div className="table">
                <p className="text-[#8e8e8e] mr-3 ">Hall</p>
                <p className="text-[#f1e3c2] ">1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-7">
          <img src="/step_seat_type.png" alt="step seat" />
        </div>
        <div className="flex items-center justify-center mt-10 ">
          <div className="mr-36">
            <img src="/Bedlg.png" alt="bed lg" />
            <p className="Bad">Large Day Bed (2 Seats)</p>
            <p className="money">4,000 Baht</p>
            <div className="flex items-center justify-center mt-5">
              <img src="/btn-sub.png" alt="sub" onClick={decrementQuantity1} />
              <input value={quantity1} onChange={handleChange1} className="w-[55px] h-[40px] text-center" />
              <img
                src="/btn-plus.png"
                alt="plus"
                onClick={incrementQuantity1}
              />
            </div>
          </div>
          <div>
            <img src="/bedday.png" alt="bed" />
            <p className="Bad">Day Bed (2 Seats)</p>
            <p className="money">4,000 Baht</p>
            <div className="flex items-center justify-center mt-5">
              <img src="/btn-sub.png" alt="sub" onClick={decrementQuantity2} />
              <input value={quantity2} onChange={handleChange2} className="w-[55px] h-[40px] text-center" />
              <img
                src="/btn-plus.png"
                alt="plus"
                onClick={incrementQuantity2}
              />
            </div>
          </div>
        </div>

        <div className="justify-center items-center flex mt-10 relative mb-24">
          <img src="/bg-bottom-seat.png" alt="bottom seat" />
          <div className="absolute inset-0 flex justify-center items-center mt-4 top-[50%]">
            <img src="/btn_seat_next.png" alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;

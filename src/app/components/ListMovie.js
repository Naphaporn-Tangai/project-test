import React from "react";

const ListMovie = () => {
  return (
    <div>
      <div className="justify-center items-center flex py-5 relative">
        <p className="absolute text-hover-text text-22">SHOWTIMES</p>
        <img
          src="https://www.embassycineplex.com/images/today-show.png"
          alt="today"
        />
      </div>
      <div className="w-4/5 mx-auto">
        <div className="justify-between flex ">
          <div className="flex items-center justify-center left-0 ">
            <img src="/transformer.jpg" alt="movie 1" className="w-36" />
            <div className="ml-5 mb-auto">
              <p className="text-2xl text-[#f1e3c2] w-[26ch]">
                TRANSFORMERS: RISE OF THE BEASTS
              </p>
              <div className="flex items-center mt-3">
                <img src="/time.png" alt="time" />
                <p className="ml-2 ">126 Min</p>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <img
                  src="http://www.embassycineplex.com/images/icon/rate_raise.png"
                  alt="rate 1"
                  className="w-10"
                />
                <img
                  src="http://www.embassycineplex.com/images/icon/type_digital.png"
                  alt="rate 2"
                  className="w-10"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end right-0 space-x-2 mb-auto w-6/12 flex-wrap ">
          <div className="mt-11">
              <div className="relative">
                <img src="/time-ago.png" alt="future time" />
                <p className="absolute  flex justify-center items-center text-[#f1e3c2] inset-0">
                  22:00
                </p>
              </div>
              <div className="flex justify-center items-center mt-1  relative">
                <p>2D</p>
              </div>
            </div>

            <div className="mt-11">
              <div className="relative">
                <img src="/time-present.png" alt="future time" />
                <p className="absolute  flex justify-center items-center text-[#f1e3c2] inset-0">
                  22:00
                </p>
              </div>
              <div className="flex justify-center items-center mt-1  relative">
                <p>2D</p>
              </div>
            </div>

            <div className="mt-11">
              <div className="relative">
                <img src="/time-future.png" alt="future time" />
                <p className="absolute  flex justify-center items-center text-[#f1e3c2] inset-0">
                  22:00
                </p>
              </div>
              <div className="flex justify-center items-center mt-1  relative">
                <p>2D</p>
              </div>
            </div>

            <div className="mt-11">
              <div className="relative">
                <img src="/time-future.png" alt="future time" />
                <p className="absolute  flex justify-center items-center text-[#f1e3c2] inset-0">
                  22:00
                </p>
              </div>
              <div className="flex justify-center items-center mt-1  relative">
                <p>2D</p>
              </div>
            </div>

            <div className="mt-11">
              <div className="relative">
                <img src="/time-future.png" alt="future time" />
                <p className="absolute  flex justify-center items-center text-[#f1e3c2] inset-0">
                  22:00
                </p>
              </div>
              <div className="flex justify-center items-center mt-1  relative">
                <p>2D</p>
              </div>
            </div>

            <div className="mt-11">
              <div className="relative">
                <img src="/time-future.png" alt="future time" />
                <p className="absolute  flex justify-center items-center text-[#f1e3c2] inset-0">
                  22:00
                </p>
              </div>
              <div className="flex justify-center items-center mt-1  relative">
                <p>2D</p>
              </div>
            </div>

            <div>
              <div className="flex justify-center items-center mt-2 top-1 relative">
                <img
                  src="/hall1-hilight.png"
                  alt="hall 1"
                />
              </div>
              <div className="relative">
                <img src="/time-future.png" alt="future time" />
                <p className="absolute  flex justify-center items-center text-[#f1e3c2] inset-0">
                  22:00
                </p>
              </div>
              <div className="flex justify-center items-center mt-1  relative">
                <p>2D</p>
              </div>
            </div>

          </div>
        </div>
        <div>
          <img
            src="https://www.embassycineplex.com/images/line-bottom-show-today.png"
            alt="bottom today"
          />
        </div>
      </div>
    </div>
  );
};

export default ListMovie;

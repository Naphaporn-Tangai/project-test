import React from "react";
import movies from "./data";
import Link from "next/link";


const ListMovie = () => {
  return (
    <div>

      <div className=" justify-center items-center flex pt-5 relative">
        <p className="absolute text-hover-text text-22">SHOWTIMES</p>
        <img
          src="/today.png"
          alt="today"
         className="w-[1024px]"
        />
      </div>
      <div className="w-4/5 mx-auto mb-12 ">
      {movies.map((movie, index) => (
        <div>
        <div className="justify-between flex my-8" key={index}>

          <div className="flex items-center justify-center left-0 ">
            <img src={movie.imgSrc} alt={movie.alt} className="w-[140px] h-[210px] ml-9" />
            <div className="ml-5 mb-auto">
              <p className="text-2xl text-[#f1e3c2] w-[26ch]">
                {movie.title}
              </p>
              <div className="flex items-center mt-3">
                <img src="/time.png" alt="time" />
                <p className="ml-2 text-md">{movie.duration}</p>
              </div>
              <div className="flex items-center space-x-2 mt-3">
              {movie.ratings.map((rating, ratingIndex) => (
                <img
                  key={ratingIndex}
                  src={rating.imgSrc}
                  alt={rating.alt}
                  className={rating.className}
                />

              ))}             
              <img
                src="/type_digital.png"
                alt="rate 2"
                className="w-10"
              />
              </div>
            </div>
          </div>

          <div className="flex justify-end right-0 space-x-2 my-auto w-2/3 flex-wrap ">
          {movie.time.map((item, itemIndex) => (
            <div className={item.classname} key={itemIndex} >
              <div className="flex justify-center items-center  top-1 relative">
                <img
                  src={item.hallImg}
                  alt={item.hallAtl} 
                />
              </div>
              <div className="relative hover:opacity-50 ">
                <Link href="/seat">
                <img src={item.imgSrc} alt={item.timeAlt}   />
                <p className="absolute  flex justify-center items-center text-[20px] inset-0">
                {item.text}
                </p>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-1 text-sm relative ">
                <p className={item.text2d}>2D</p>
              </div>
            </div>
            ))}
          </div>

        </div>
        <div >
          <img
            src="https://www.embassycineplex.com/images/line-bottom-show-today.png"
            alt="bottom today"
          />
        </div>
        </div>      

        ))}        

      </div>
     
    </div>
  );
};

export default ListMovie;

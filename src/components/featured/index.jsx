import { DM_Serif_Display, Forum } from "next/font/google";
import React from "react";

const forum = Forum({ subsets: ["latin"], weight: ["400"] });
const font = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], style: ["italic"] });

const Featured = () => {
  return (
    <div className="hero min-h-screen bg-themeColor-gray-300">
      <div>
        <h1 className={`${font.className} text-4xl lg:text-7xl font-bold lg:pb-16 lg:pt-0 pt-5 pb-6  ml-2`}>Your Blog App Title</h1>
        <div className="hero-content flex-col lg:flex-row">
          <img src="./img/hero2.jpg" className="sm:max-w-50 lg:max-w-xl rounded-md shadow-2xl" />
          <div className="pl-0 lg:pl-5">
            <h1 className={`${font.className} lg:text-5xl text-2xl font-bold`}>Mage ngapain di mid doang?</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsa deserunt! Soluta itaque natus, totam optio vero aliquid architecto impedit deserunt placeat, iure rerum. Porro ullam repellat minus dolorem vel.
            </p>
            <button className="btn bg-themeColor-gray-800 text-themeColor-light">See Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

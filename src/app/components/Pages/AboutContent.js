"use client";

import React from "react";
import Image from "next/image";

const AboutContent = () => {
  return (
    <div className="i-col40 i-fr i-pd-top-10">
      <div className="ianimage-container">
        <div className="ianimage-outer-wrapper">
          <div className="ianimage-inner-wrapper">
            <Image
              src="/img/ian-about.jpg"
              width={1000}
              height={1000}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

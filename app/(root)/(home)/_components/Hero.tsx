"use client";

import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="nav-padding w-full h-screen">
      <div className="flex items-between">
        <div className="flex flex-col justify-between flex-1">
          <h1 className="font-bold text-7xl sm:text-5xl text-primary-500 leading-[1] text-shadow-custom">
            Start your Journey to study{" "}
            <span className="text-primary">in the UK</span>
          </h1>
          <p className="text-xl font-light leading-[2] py-5">
            Get real time help through video chat from the{" "}
            <span className="text-secondary font-semibold">
              British Council Certified Counsellor.
            </span>
          </p>
          <div>
            <Button title="Book an appointment" handleClick={() => {}} />
          </div>

          <h5 className="py-5 text-primary-500">
            <span className="text-secondary font-semibold">5000+</span> students
            counselled
          </h5>
          <h5 className="pb-5 text-primary-500">
            <span className="text-secondary font-semibold">
              100% visa success rate
            </span>{" "}
            for the last academic year
          </h5>
          <ul className="flex gap-4 text-2xl">
            <li>
              <a
                href="https://www.facebook.com/studyintheuk111"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/GaneshKhadkalive"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/uni-ladder-consultancy-89a7211ab/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <Image
          src="/248.svg"
          alt="hero-bg"
          className="hidden md:flex flex-1"
          height={400}
          width={400}
        />
      </div>
    </section>
  );
};

export default Hero;

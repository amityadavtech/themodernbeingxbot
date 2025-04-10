"use client";
import Image from "next/image";

const MotionDiv = ({ children, className = "" }) => (
  <div className={`w-full md:w-1/2 highlight-effect ${className}`}>
    {children}
  </div>
);

const ContentBlock = ({
  title,
  highlight,
  image,
  alt,
  descriptionStart,
  descriptionEnd,
  reverse,
}) => (
  <div
    className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-[0.5rem] md:gap-10 bg-[#1A1A1A] p-4 md:p-12 rounded-2xl shadow-2xl space-y-10 my-10`}
  >
    <MotionDiv>
      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        className="rounded-xl shadow-lg"
        priority
      />
    </MotionDiv>

    <MotionDiv>
      <div className="text-white space-y-5">
        <h2 className="md:text-4xl text-[1.75rem] font-semibold">
          {title} <span className="text-[var(--primary-color)]">{highlight}</span>
        </h2>
        <p className="text-gray-400 leading-7">
          <span className="highlight-effect bg-gradient-to-r from-[var(--primary-color)] to-[#4C25D9] bg-no-repeat bg-[0_100%] bg-[length:0%_100%] transition-all duration-1000 font-semibold">
            {descriptionStart}
          </span>{" "}
          {descriptionEnd}
        </p>
      </div>
    </MotionDiv>
  </div>
);

export default ContentBlock;

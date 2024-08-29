import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const socialLinks = {
    Instagram: "https://www.instagram.com/arjun28jain/",
    Github: "https://github.com/arjun28jain",
    LinkedIn: "https://www.linkedin.com/in/arjun-jain-8821a0212/",
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Arjun Jain
          </span>
        </a>

        <div className="flex flex-row items-center ml-auto gap-4 text-gray-200 m-6">
          <a href="#projects" className="cursor-pointer m-3">
            Projects
          </a>
          <a href="#skills" className="cursor-pointer m-3">
            Skills
          </a>
          <a href="#about-me" className="cursor-pointer m-3">
            About
          </a>
        </div>

        <div className="flex flex-row gap-5 text-gray-200">
          {Socials.map((social) => (
            <a
              href={socialLinks[social.name]}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

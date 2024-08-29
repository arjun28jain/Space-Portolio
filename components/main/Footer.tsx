import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-4 mt-6">
      
      {/* Contact Information */}
      <div className="text-center">
       

        <div className="mt-4 flex flex-col gap-2 items-center">
          <div>
            <p className="font-bold opacity-60 ">Email:</p>
            <a href="mailto:arjunjain2892003@gmail.com" className="text-secondary">
              arjunjain2892003@gmail.com
            </a>
          </div>

          <div>
            <p className="font-bold opacity-60 ">Phone:</p>
            <a href="tel:+917007034266" className="text-secondary">
              +91 7007034266
            </a>
          </div>

          <div>
            <p className="font-bold opacity-60 ">Leetcode:</p>
            <a
              href="https://leetcode.com/u/arjun28jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              https://leetcode.com/u/arjun28jain/
            </a>
          </div>

          <div>
            <p className="font-bold opacity-60 ">Github:</p>
            <a
              href="https://github.com/arjun28jain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              https://github.com/arjun28jain
            </a>
          </div>

          <div>
            <p className="font-bold opacity-60 ">Instagram:</p>
            <a
              href="https://www.instagram.com/arjun28jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              https://www.instagram.com/arjun28jain/
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-8">
  <span className="font-semibold">Thanks for visiting</span>
</div>

    </div>
  );
};

export default Footer;

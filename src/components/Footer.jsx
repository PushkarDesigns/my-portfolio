import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp, FaPhoneAlt,} from "react-icons/fa";
import { socialsData } from "../utils/footerData";

// Map string icon name to React component
const iconMap = { FaLinkedinIn: FaLinkedinIn, FaGithub: FaGithub, FaEnvelope: FaEnvelope, FaWhatsapp: FaWhatsapp, FaPhoneAlt: FaPhoneAlt,};

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1120] text-gray-300 py-10">
      <div className="flex flex-col items-center justify-center space-y-6">

        {/* Social Icons */}
        <div className="flex space-x-6">
          {socialsData.map(({ name, icon, link }) => {
            const IconComponent = iconMap[icon];
            return (
              <a key={name} href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <IconComponent size={22} />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[90%] md:w-[50%] border-t border-gray-700 my-4"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 space-y-1">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p className="text-gray-500">
            Protected by <span className="text-green-400 font-medium">Pushkar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

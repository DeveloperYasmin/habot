import React from 'react';
import logoImage from "./logo.png"
import media from "./media.png"

const Footer = () => {
  return (
    
   <div className="bg-gray-800 mt-20 mb-0 h-60 text-gray-300">
  <div className="grid ml-44 text-lg grid-cols-1 md:grid-cols-5 gap-1">
    <div className="flex mt-16 flex-col ">
      <img src={logoImage} alt="Logo" className="mb-4" />
      <p>&copy;  R Singhania</p>
    </div>
    <div className="ml-10 mt-16">
      <h3 className="font-bold">Company</h3>
      <ul>
        <li>About</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div className="mt-16 -ml-28">
      <h3 className="font-bold">Terms</h3>
      <ul>
        <li>Data privacy</li>
        <li>Terms</li>
        <li>Accessibility</li>
      </ul>
    </div>
    <div className="mt-16 -ml-60">
      <h3 className="font-bold">Related</h3>
      <ul>
        <li>Find Buyer</li>
        <li>Feedback</li>
      </ul>
    </div>
    <div className="flex mt-2 -ml-44 flex-col">
      <img src={media} alt="Related" className="mb-4 w-[260px]" />
    </div>
  </div>
</div>
   
  );
};

export default Footer;

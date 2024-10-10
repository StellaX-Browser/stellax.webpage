import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        
        <div className="flex items-center mb-8">
          <img src="/images/logo.png" alt="StellaX Logo" className="w-12 h-12 mr-4" />
          <h4 className="font-bold text-4xl" style={{ fontFamily: 'Roboto, Helvetica' }}>
            StellaX Technologies
          </h4>
        </div>

        
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-start ml-16"> 
            <h4 className="font-bold text-xl underline">Subscribe To Our Newsletter</h4> 
            <p className="mt-1 text-left">Get Product Updates, Company News, and more</p>
          </div>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 border border-gray-600 bg-[#d9d9d9] text-black w-[610px] rounded-lg" 
              style={{ fontFamily: 'Roboto, Medium' }} 
            />
            <button
              className="px-5 py-2 rounded-r-md"
              style={{
                backgroundImage: 'url(/images/signup.png)', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: 'none',
                color: 'white',
              }}
            >
              Sign Up
            </button>
          </form>
        </div>

        
        <div className="flex justify-around mt-8">
          
          <div>
            <h4 className="font-bold text-lg">About</h4> 
            <ul className="mt-2 space-y-1">
              <li>About Us</li>
              <li>News/Blog</li>
              <li>Careers</li>
              <li>Our Technology</li>
              <li>Team/Our Experts</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg">Get Involved</h4> 
            <ul className="mt-2 space-y-1">
              <li>Contribute</li>
              <li>Sponsor Us</li>
              <li>Partnerships</li>
              <li>User Community</li>
              <li>Services</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg">Pricing</h4> 
            <ul className="mt-2 space-y-1">
              <li>Pricing</li>
              <li>Free Trial</li>
              <li>Plans</li>
              <li>FAQ</li>
              <li>Refund</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg">Customer Care</h4> 
            <ul className="mt-2 space-y-1">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Survey & Feedback</li>
            </ul>
          </div>
        </div>

        
        <hr className="border-t border-white my-8" />

        
        <div className="mt-8 flex justify-between items-center">
          
          <div className="flex items-center">
            <span className="mr-2">Sponsored By:</span>
            <img src="/images/sponsor.png" alt="Sponsor 1" className="w-8 h-8" />
          </div>

          
          <div className="text-sm text-center">
            © 2024 stellaxtechnologies. All rights reserved
          </div>

          
          <div className="flex space-x-4">
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              <img src="/images/discord.png" alt="Discord" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src="/images/github.png" alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
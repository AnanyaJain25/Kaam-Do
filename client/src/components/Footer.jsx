import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div>


      <footer className="bg-gray-800 text-white flex justify-center items-center ">
        <div className="container p-10 flex justify-center items-center">
          <div className="flex justify-between gap-10">
            {/* Column 1 */}
            <div className="w-full md:w-1/5">
              <Link to="/" className="text-orange-600 font-bold text-xl">
                Kaam<span className="text-[#fb923c]">Do</span>
              </Link>
              <p className="mt-4 text-gray-400">
                KaamDo is your ultimate platform for finding jobs and connecting with companies. We aim to simplify job searching and hiring processes.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FiInstagram />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-full md:w-1/5">
              <h2 className="font-bold mb-3">Company</h2>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-orange-600">About Us</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-orange-600">Home</Link></li>
              </ul>
  const links = [
    { name: 'About Us', url: '/about' },
    { name: 'Home', url: '/' },
    { name: 'Company Profile', url: '/company-profile' },
    { name: 'Companies', url: '/companies' },
    { name: 'Find Jobs', url: '/find-jobs' },
  ];

  return (
    <footer className="bg-[#eee6db] pt-20 dark:bg-slate-900">
      <div className="container px-5 py-10 mx-auto pb-20">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Column 1 */}
          <div className="w-full md:w-1/5">
            <Link to="/" className="text-orange-600 font-bold text-xl">
              Kaam<span className="text-[#fb923c]">Do</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              KaamDo is your ultimate platform for finding jobs and connecting with companies. We aim to simplify job searching and hiring processes.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-2xl hover:text-blue-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-2xl hover:text-blue-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-blue-300">
                <FiInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-blue-300">
                <FaLinkedinIn />
              </a>

            </div>
          </div>


            {/* Column 3 */}
            <div className="w-full md:w-1/5">
              <h2 className="font-bold mb-3">Support</h2>
              <ul className="space-y-2">
                <li><Link to="/company-profile" className="text-gray-400 hover:text-orange-600">Company Profile</Link></li>
                <li><Link to="/companies" className="text-gray-400 hover:text-orange-600">Companies</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="w-full md:w-1/5">
              <h2 className="font-bold mb-3">Links</h2>
              <ul className="space-y-2">
                <li><Link to="/find-jobs" className="text-gray-400 hover:text-orange-600">Find Jobs</Link></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="w-full md:w-1/5 ">
              <h2 className="font-bold mb-3">Contact Us</h2>
              <ul className="space-y-2 text-gray-400 ">
                <li className="hover:text-orange-600">Phone: (123) 456-7890</li>
                <li className="hover:text-orange-600">Email: info@example.com</li>
              </ul>
            </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/5">
            <h2 className="font-bold mb-3">Company</h2>
            <ul className="space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/5">
            <h2 className="font-bold mb-3">Support</h2>
            <ul className="space-y-2">
              <li><Link to="/company-profile">Company Profile</Link></li>
              <li><Link to="/companies">Companies</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full" style={{ width: '13%' }}>
            <h2 className="font-bold mb-3">Links</h2>
            <ul className="space-y-2">
              <li><Link to="/find-jobs">Find Jobs</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="w-full" style={{ width: '16%' }}>
            <h2 className="font-bold mb-3">Contact Us</h2>
            <ul className="space-y-2">
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>

          </div>
        </div>
      </div>


      </footer>
      <div className="bg-gray-900 py-5 flex justify-center items-center">
        {/* <div className="container mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-center"> */}
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Copyright&copy; 2024 by Kaam Do. All rights reserved.
          </p>
        {/* </div> */}

      <div className="bg-orange-100 dark:bg-slate-950 py-4">
        <div className="container mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
            &copy; Copyright by Kaam Do. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
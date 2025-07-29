import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">

                <img
                  src="/logo/ewds.png"
                  alt="Fit Friendly Logo"
                  className="w-100 h-30 object-contain"
                />

              
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform your fitness journey with personalized training programs, 
              expert guidance, and unwavering support. Your goals are our mission.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/fitfriendly24/" className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-red-500 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61569107488532" className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-300">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.326v21.348C0 23.406.596 24 1.326 24h11.497v-9.294H9.692v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.326-.594 1.326-1.326V1.326C24 .592 23.405 0 22.675 0z" />
    </svg>
  </div>
</a>

              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center space-x-2 group">
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Home</span>
              </Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center space-x-2 group">
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>About Us</span>
              </Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center space-x-2 group">
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Services</span>
              </Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center space-x-2 group">
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Contact</span>
              </Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>
              <span>Our Services</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Personal Training</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Nutrition Planning</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Fitness Consultation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Progress Tracking</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Group Classes</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-teal-400 rounded-full"></div>
              <span>Get in Touch</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <p className="text-gray-300 text-sm">fitfriendly24@gmail.com</p>
                </div>
              </div>
              
              <div className="pt-4">
                <a
                  href="https://wa.me/message/XTWWCIVN2JFBG1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.130.332.202c.045.072.045.419-.1.824z"/>
                    </svg>
                  </div>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Fit Friendly. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
              <span className="text-gray-600">|</span>
              <a
                href="https://www.sarwastudio.com/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Created by <strong className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sarwa Studio</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
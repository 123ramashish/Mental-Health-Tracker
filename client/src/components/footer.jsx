import React from 'react';
const Footer = () => {
    return (
      <footer className="w-full py-6 bg-gray-50  border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} MoodVibe. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Designed with ❤️ for better mental wellbeing
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/terms" 
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="/privacy" 
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/contact" 
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              MoodVibe is not a substitute for professional medical advice, diagnosis, or treatment
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
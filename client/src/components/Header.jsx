import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);


 
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/test", name: "Test" },
    { path: "/therapist", name: "AI Therapist" },
    { path: "/contact", name: "Contact Us" },
    { path: "/about", name: "About Us" },
  ];

  return (
    <Navbar className="border-b-2 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-50">
      <div className="flex items-center gap-4 w-full max-w-7xl mx-auto">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <img
            className="h-10 w-10 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZrRgwuKA5JrFS4glBVgzvmPDhhPjWrObr-D01xeKZQ&s"
            alt="MoodVibe Logo"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MoodVibe
          </span>
        </motion.div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4"></div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:order-2">
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Avatar
                    alt="user"
                    img={currentUser.profilePicture}
                    rounded
                  />
                </motion.div>
              }
              theme={{ floating: { base: "rounded-xl shadow-xl" } }}
            >
              <Dropdown.Header className="px-4 py-3">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  {currentUser.name}
                </span>
                <span className="block text-sm text-gray-500 truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Divider className="my-1" />
              <Link to="/signout">
                <Dropdown.Item className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                  Sign out
                </Dropdown.Item>
              </Link>
            </Dropdown>
          ) : (
            <Link to="/login">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="px-6 rounded-full font-semibold shadow-sm"
                >
                  Sign In
                </Button>
              </motion.div>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <Navbar.Toggle className="md:hidden" />
        
        {/* Navigation Links */}
        <Navbar.Collapse className="w-full md:w-auto md:order-1 mr-0 md:mr-4">
          {navLinks.map((link) => (
            <Navbar.Link
              key={link.path}
              as={Link}
              to={link.path}
              active={path === link.path}
              className={`px-4 py-2 rounded-lg transition-colors ${
                path === link.path
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {link.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
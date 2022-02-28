import React from "react";
import Button from "@material-tailwind/react/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <span className="p-4 text-2xl">EaseNote</span>
      <div className="">
        <ul className="flex items-center h-full space-x-4">
          <li className="">
            <a href="#">
              <Button buttonType="link" size="sm">
                Contact Us
              </Button>
            </a>
          </li>
          <li className="">
            <a href="#">
              <Button buttonType="link" size="sm">
                About
              </Button>
            </a>
          </li>
          <li className="">
            <a href="#">
              <Button buttonType="outline" ripple="light">
                Sign In
              </Button>
            </a>
          </li>
          <li className="">
            <a href="#">
              <Button color="blue" ripple="light">
                Log In
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useRef, useEffect, useState } from "react";
import ModeToggle from "./ModeToggle";
import options from "../array/HeaderOptions";
import { Button, Link } from "@nextui-org/react";
import { useHref, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const headerRef = useRef(null);

  const navigate = useHref();

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = headerRef.current.clientHeight;

      if (scrollY > headerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`w-full z-50 rounded-b-xl shadow-sm flex sm:gap-8 justify-between items-center px-4 lg:px-12 py-4 backdrop-blur-lg border-b ${
        isFixed
          ? "fixed top-0 rounded-b transition-transform duration-300 transform"
          : ""
      }`}
    >
      <div className="flex-1">LOGO</div>
      <div className="flex justify-evenly flex-1 gap-8 lg:gap-12">
        {options.map((opt, id) => (
          <div key={id}>
            <Link
              color="foreground"
              href={opt.route}
              className={`font-semibold ${
                navigate === opt.route ? "underline text-warning" : ""
              }`}
            >
              {opt.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-1 justify-end gap-2 lg:gap-4">
        <div>
          <ModeToggle />
        </div>
        <div className=" flex items-center">
          <Link href="/signin">
            <Button
              size="sm"
              radius="sm"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-semibold uppercase"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

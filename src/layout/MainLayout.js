import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  const [isFixed, setIsFixed] = useState(true);
  const [initialScrollPos, setInitialScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if scrolling up or down
      setIsFixed(scrollY <= initialScrollPos);

      // Update the initial scroll position
      if (scrollY === 0) {
        setInitialScrollPos(0);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialScrollPos]);

  return (
    <>
      <div className="w-full min-h-screen h-full flex flex-col justify-between px-4 md:px-10 lg:px-24 xl:px-44">
        <div className="hidden sm:flex justify-center  ">
          <Header isFixed={isFixed} />
        </div>
        <div className="w-full py-10 h-full ">{children}</div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;

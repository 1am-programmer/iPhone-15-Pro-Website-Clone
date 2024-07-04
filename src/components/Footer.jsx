import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10  px-5  ">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs  ">
            More ways to shop:
            {"  "}
            <span className="underline text-blue">
              Find an Apple store {"   "}
            </span>
            or
            <span className="underline text-blue">
              other retailer near you {"   "}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

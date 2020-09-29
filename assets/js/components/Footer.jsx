import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="flex">
          <div className="col">#MyEcoAttitude</div>
          <div className="col">
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
            <i className="fab fa-instagram"></i>

            <i className="fab fa-pinterest-p"></i>
          </div>
          <div className="col">
            <div>Copyright © 2020 Ettitude Holdings, Inc.</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

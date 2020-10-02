import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import gsap from "gsap";

const Navbar = () => {
  const cartTotalItems = useSelector((state) => state.cart.cartItems.length);
  const [isActive, setIsActive] = useState(false);

  let burger = useRef(null);

  const categories = [
    {
      name: "Bed",
      subCategory: ["coussins", "draps", "duvets"],
    },
    {
      name: "Accessories",
      subCategory: ["sleep", "travel"],
    },
    {
      name: "Baby",
      // subCategory: ["coussins", "draps", "duvets"],
      subCategory: [""],
    },
    {
      name: "Bath",
      subCategory: [""],
    },
    {
      name: "Men",
      subCategory: ["bottoms", "tops"],
    },
    {
      name: "Women",
      subCategory: ["bottoms", "tops", "robes"],
    },
  ];

  const handleClick = () => {
    setIsActive(!isActive);
    let navLinks = document.querySelectorAll(".nav-menu li");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    if (burger.classList) {
      if (burger.classList.contains("toggle")) {
        burger.classList.remove("toggle");
      } else {
        burger.classList.add("toggle");
      }
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="top-nav">
          <ul className={"nav-menu" + (isActive ? " nav-active" : "")}>
            {categories.map((category) => (
              <li className="dropdown" key={category.name}>
                <Link
                  onClick={() => {
                    setIsActive(!isActive);
                    if (burger.classList) {
                      burger.classList.remove("toggle");
                    }
                  }}
                  to={`/shop/${category.name.toLowerCase()}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <i
              className="fas fa-times"
              onClick={() => {
                setIsActive(!isActive);
                if (burger.classList) {
                  burger.classList.remove("toggle");
                }
              }}
            ></i>
          </ul>
          <div className="burger" ref={burger} onClick={handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="center">
            <Link to="/">
              <li>Ettitude</li>
            </Link>
          </ul>
          <ul className="top-right">
            <Link to="/cart">
              <li>
                <i className="fas fa-shopping-cart"></i> {cartTotalItems}
              </li>
            </Link>
          </ul>
        </div>
        <div className="bottom-nav">
          <div className="dropdown-container ">
            {categories.map((category) => (
              <li className="dropdown" key={category.name}>
                <Link to={`/shop/${category.name.toLowerCase()}`}>
                  {category.name}
                </Link>

                <div className="flex-nav">
                  {/* Left */}
                  <div className="nav-left">
                    <Link
                      className="sub-cat"
                      to={`/shop/${category.name.toLowerCase()}`}
                    >
                      <span className="item">All {category.name}</span>
                    </Link>
                    {category.subCategory.map((subcategory) => (
                      /** /shop/women-bottoms for example **/
                      <Link
                        key={subcategory}
                        className="sub-cat"
                        to={`/shop/${category.name.toLowerCase()}/${subcategory}`}
                      >
                        <span className="item">{subcategory}</span>
                      </Link>
                    ))}
                  </div>
                  {/* Right */}
                  <div className="nav-right">
                    <div className="img-container">
                      <img
                        src={`/images/${category.name.toLowerCase()}/sub-nav.jpg`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

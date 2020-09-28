import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartTotalItems = useSelector((state) => state.cart.cartItems.length);

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
      subCategory: ["coussins", "draps", "duvets"],
    },
    {
      name: "Bath",
      subCategory: ["coussins", "draps", "duvets"],
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
  return (
    <>
      <nav className="navbar" onClick={() => console.log(cartTotalItems)}>
        <div className="top-nav">
          <ul className="top-left">
            <li>Our Promise</li>
            <li>Materials</li>
            <li>Reviews</li>
          </ul>
          <ul className="center">
            <li>Ettitude</li>
          </ul>
          <ul className="top-right">
            <li>Search</li>
            <li>My Account</li>
            <Link to="/cart">
              <li>
                <i className="fas fa-shopping-cart"></i> {cartTotalItems}
              </li>
            </Link>
          </ul>
        </div>
        <div className="bottom-nav">
          <div className="dropdown-container">
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

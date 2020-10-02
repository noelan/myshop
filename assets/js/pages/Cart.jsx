import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearItem, checkout } from "../Redux/Cart/cart-action";
import { Link } from "react-router-dom";
import LoaderCustom from "../components/Loader-Custom";
import { toast } from "react-toastify";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [totalCart, setTotalCart] = useState(0);

  const calculTotalCart = () => {
    cart.forEach((item) => {
      setTotalCart((prevTotal) => prevTotal + item.price * item.quantity);
      console.log(totalCart);
    });
  };

  const handleClick = (article) => {
    setIsLoading(true);
    dispatch(clearItem(article));
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Votre article a bien été retirée");
    }, 500);
    setTotalCart(0);
  };

  console.log(cart);

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(checkout());
      toast.success("Bravo tu as payée Merci !");
    }, 500);
  };

  useEffect(() => {
    calculTotalCart();
  }, [cart]);

  return (
    <>
      {isLoading && <LoaderCustom />}
      <div className="container-fluid container-cart">
        {cart.length > 0 && (
          <div className="cart">
            <div className="flex card">
              {/* Left */}
              <div className="left">
                {cart.length > 0 &&
                  cart.map((article, index) => (
                    <div key={index} className="row-article">
                      <div className="flex-card">
                        <div className="img-container">
                          <Link to={"/products/" + article.id}>
                            <img src={article.picture} alt="" />
                          </Link>
                        </div>
                        <div className="detail">
                          {/* Left */}
                          <div className="detail-left">
                            <div className="title">{article.name}</div>

                            <div className="color">Color: {article.color}</div>
                            <div className="size">Size : {article.size} </div>
                            <div className="quantity">
                              Quantity: {article.quantity}
                            </div>
                          </div>
                          {/* Right */}
                          <div className="detail-right">
                            <div
                              className="clear"
                              onClick={() => handleClick(article)}
                            >
                              <i className="fas fa-minus-square"></i>
                            </div>
                            <div className="price">{article.price}.00€</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/* End Left */}

              {/* Right */}
              <div className="right">
                <div className="text">
                  <div className="total">
                    CART TOTAL <span>{totalCart}.00€</span>
                  </div>
                  <div className="sub-text">
                    Shipping & taxes calculated at checkout
                  </div>

                  <div className="agree">
                    <label htmlFor="agree">
                      <input
                        className="checkbox-cart"
                        type="checkbox"
                        onChange={() => console.log("")}
                      />
                      I agree to{" "}
                      <span className="terms">Terms & conditions</span>
                    </label>
                  </div>

                  <div className="checkout btn" onClick={handleCheckout}>
                    Checkout
                  </div>
                </div>
                {/* End Right */}
              </div>
            </div>
          </div>
        )}
        {cart.length < 1 && !isLoading && (
          <div className="empty-cart">
            <div className="title">Ton panier est vide.</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

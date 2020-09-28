import React, { useEffect, useState, useContext } from "react";
import ArticleAPI from "../api/ArticleAPI";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Redux/Cart/cart-action";
import { toast } from "react-toastify";
import LoaderCustom from "../components/Loader-Custom";

const ShowArticle = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [currentColor, setCurrentcolor] = useState();
  const [currentSize, setCurrentSize] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const [article, setArticle] = useState({
    name: "",
    picture: "",
    description: "",
    price: "",
    colors: [""],
    sizes: [],
    materials: [],
  });

  // add article in cart
  const handleAddCart = (e) => {
    setIsLoading(true);
    dispatch(
      addItem({
        id: id,
        name: article.name,
        price: article.price,
        quantity: quantity,
        color: currentColor,
        picture: `${article.picture}${currentColor}.jpg`,
        size: currentSize,
        sizes: article.sizes,
      })
    );

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Votre article a bien été ajouté");
    }, 500);
    setQuantity(1);
  };

  const { id } = props.match.params;

  const fetchArticle = async (id) => {
    const data = await ArticleAPI.findById(id);
    const {
      name,
      picture,
      description,
      price,
      colors,
      sizes,
      materials,
    } = data;
    setArticle({
      name,
      picture,
      description,
      price,
      colors,
      sizes,
      materials,
    });
    // Set color by default (First color of the array colors)
    setCurrentcolor(colors[0]);
    setCurrentSize(sizes[0]);
  };

  const handleClick = (e) => {
    // wtf i know
    const addOrRemove = e.target.id;
    // Ajoute, ou enleve si quantity > 0
    if (addOrRemove === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        {
          setQuantity(quantity - 1);
        }
      }
    }
  };

  const handleCurrentColor = (e) => {
    // wtf i know
    let color = e.currentTarget.id;
    setCurrentcolor(color);
  };

  const handleCurrentSize = (e) => {
    // wtf i know
    let size = e.currentTarget.id;
    setCurrentSize(size);
  };

  useEffect(() => {
    fetchArticle(id);
  }, [id]);
  return (
    <>
      {isLoading && <LoaderCustom />}

      <div className="container-fluid">
        <div className="article-container">
          <div className="flex">
            {/* Left column */}
            <div className="left">
              <div className="img-container">
                {currentColor && (
                  <img src={`${article.picture}${currentColor}.jpg`} alt="" />
                )}
              </div>
              <div className="description">{article.description}</div>
            </div>
            {/* End Left column */}

            {/* Right column */}
            <div className="right">
              <div className="article-name">{article.name}</div>
              <div className="article-price">{article.price}.00€</div>
              <div className="colors">
                <div>Colors</div>

                <div className="capitalize">{currentColor}</div>
              </div>
              <div className="article-colors">
                {article.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`color color-${color}`}
                    id={color}
                    onClick={handleCurrentColor}
                  ></span>
                ))}
              </div>
              <div className="quantity">
                <div className="quantity-group">
                  <div className="left-btn">
                    <span onClick={handleClick} id="remove">
                      -
                    </span>
                    <input
                      value={quantity}
                      onChange={() => console.log("salut")}
                    />
                    <span onClick={handleClick} id="add">
                      +
                    </span>
                  </div>
                  <div className="right-btn">
                    <div className="add" onClick={handleAddCart}>
                      <div>Add to cart</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sizes">
                <div className="sizes-group">
                  {article.sizes.map((size, index) => (
                    <span
                      key={index}
                      className={
                        "size" + (size == currentSize ? " active" : "")
                      }
                      id={size}
                      onClick={handleCurrentSize}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="materials">
                <div>Materials</div>
                100% Organic Bamboo Lyocell in 300 thread count, equals to 1000
                cotton thread count. Oeko-Tex® certified.Easy to care, view
                laundry guide.
              </div>

              <div className="free-order">
                Free US Delivery on Orders Over $50
              </div>
            </div>
            {/* End right column */}
          </div>
          {/* <div className="suggested">Suggested</div> */}
        </div>
      </div>
    </>
  );
};

export default ShowArticle;

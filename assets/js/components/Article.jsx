import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
  const { price, colors, name, picture, id } = props.data;
  const [currentColor, setCurrentColor] = useState(props.currentColor);

  const handleClick = (event) => {
    // Yeah wtf i know
    setCurrentColor(event.target.id);
  };

  return (
    <div className="article">
      <Link key={id} to={`/products/${id}`}>
        <div className="img-container">
          <img src={`${picture}${currentColor}.jpg`} alt="" />
        </div>
      </Link>
      <div className="detail">
        <div className="article-name">{name}</div>
        <div className="flex">
          <div className="article-price">{price}.00€</div>
          <div className="article-colors">
            {colors.map((color, index) => (
              <span
                key={index}
                className={`color color-${color}`}
                id={color}
                onClick={handleClick}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

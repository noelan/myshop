import React, { useState, useEffect } from "react";

import Accordion from "./Accordion";

const Filter = (props) => {
  const cat = props.category;
  const [options, setOptions] = useState([]);

  const possibleFilters = [
    ["men", "tops", "bottoms"],
    ["women", "tops", "bottoms", "robes"],
    ["accessorries", "sleep", "travel"],
    ["bath", "towels", "bathrobes"],
    ["baby"],
    ["bed", "coussins", "draps", "duvets"],
  ];

  const getOptions = () => {
    possibleFilters.forEach((catArray) => {
      if (catArray[0] === cat) {
        let data = catArray.slice(1, catArray.length);
        setOptions(data);
      }
    });
  };

  useEffect(() => {
    getOptions();
  }, [cat]);

  return (
    <>
      <div className="filter-container">
        <div className="title">Filtre</div>
        <Accordion name="Category" options={options} />
        <Accordion
          name="Materials"
          options={["Coton", "Laine", "Lin", "Polyester", "Linen"]}
        />

        <Accordion name="Sizes" options={["XXL", "XL", "L", "M", "S", "XS"]} />
        <Accordion
          name="Colors"
          options={["blue", "black", "pink", "grey", "white", "green"]}
        />
      </div>
    </>
  );
};

export default Filter;

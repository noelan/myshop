import React, { useRef, useEffect } from "react";

const Accordion = (props) => {
  const { name, options } = props;
  const accordionRef = useRef(null);

  const handleClick = () => {
    let accordion = accordionRef.current;

    let panel = accordion.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  /* Magical function but not clean */

  return (
    <>
      <div className="accordion" onClick={handleClick} ref={accordionRef}>
        {name}
      </div>

      <div className="panel">
        {options.map((option, index) => (
          <div key={index} className="flex">
            <input
              type="checkbox"
              value={option}
              name={option}
              id="filter-checkbox"
            />
            <span key={option}>{option}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;

import React from "react";
import Loader from "react-loader-spinner";

const LoaderCustom = () => {
  return (
    <>
      <div className="loader-container">
        <Loader
          type="TailSpin"
          color="#c57278"
          height={100}
          width={100}
          className="loader"
        />
      </div>
    </>
  );
};

export default LoaderCustom;

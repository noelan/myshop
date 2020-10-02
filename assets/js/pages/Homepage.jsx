import React, { useEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import gsap from "gsap";

const HomePage = () => {
  const collectionsData = [
    {
      category: "Bedding",
      title: "Tuck into vegan silk",
      goTo: "Shop bed ",
      picture: "/images/usefull/collection-bed.jpg",
      path: "/shop/bed",
    },
    {
      category: "Bath",
      title: "Wrap yourself in plush waffle weave",
      goTo: "Shop towels ",
      picture: "/images/usefull/collection-bath.jpg",
      path: "/shop/bath",
    },
    {
      category: "Women",
      title: "Slip into luxuriously soft loungewear",
      goTo: "Shop women ",
      picture: "/images/usefull/collection-sleep.jpg",
      path: "/shop/women",
    },
  ];

  let collectionRefs = [];
  const setRef = (ref) => {
    collectionRefs.push(ref);
  };

  const Fade = (element) => {
    if (element.length > 1) {
      element.forEach((div) => {
        gsap.fromTo(div, 2, { opacity: 0, ease: "power2.out" }, { opacity: 1 });
      });
    }
  };

  useEffect(() => {
    // Fade(collectionRefs);
  }, []);

  return (
    <>
      <div className="container-full homepage">
        {/* Parallax */}
        <Parallax
          bgImage="/images/usefull/parallax.jpg"
          bgImageAlt="the cat"
          strength={500}
          className="parallax"
        >
          <div className="text">
            <div>Soft on your skin.</div>
            <div>Gentle on our planet</div>
            <Link to="/shop/bed">
              <span className="btn">Shop Bedding</span>
            </Link>
          </div>

          <div className="parallax-height" />
        </Parallax>
        {/* Section 1 */}
        <div className="try-risk-free">
          <div className="text">
            <div className="title">
              Feeling is believing—and we believe you’ll love it.
            </div>
            <div className="sub-text">
              Try any bedding risk-free for 30 nights.
            </div>
          </div>
          <div className="btn">Try risk free</div>
        </div>
        {/* End Section 1 */}
        {/* Collection */}
        <div className="collection">
          {collectionsData.map(
            (collection, index) =>
              (index % 2 === 0 && (
                <div className="row" key={index} ref={setRef}>
                  <div className="row-left">
                    <div className="category">{collection.category}</div>
                    <div className="title">{collection.title}</div>
                    <div className="go-to">{collection.goTo}</div>
                  </div>
                  <div className="row-right">
                    <div className="img-container">
                      <Link to={collection.path}>
                        <img src={collection.picture} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              )) || (
                <div className="row" key={index} ref={setRef}>
                  <div className="row-right">
                    <div className="img-container">
                      <Link to={collection.path}>
                        <img src={collection.picture} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="row-left">
                    <div className="category">{collection.category}</div>
                    <div className="title">{collection.title}</div>
                    <div className="go-to">{collection.goTo}</div>
                  </div>
                </div>
              )
          )}
        </div>
        {/* End Collection */}
        {/* Section 2 */}
        <div className="section-two">
          <div className="flex">
            {/* Left */}
            <div className="col-left">
              <div className="wrapper">
                <div className="img-container">
                  <img src="/images/section-two/1.jpg" alt="" />
                </div>
                <div className="text">Breathable</div>
              </div>
              <div className="wrapper">
                <div className="img-container">
                  <img src="/images/section-two/2.jpg" alt="" />
                </div>
                <div className="text">Hypoallergenic</div>
              </div>
              <div className="wrapper">
                <div className="img-container">
                  <img src="/images/section-two/3.jpg" alt="" />
                </div>
                <div className="text">Moisture- wicking</div>
              </div>
              <div className="wrapper">
                <div className="img-container">
                  <img src="/images/section-two/4.jpg" alt="" />
                </div>
                <div className="text">Water-saving</div>
              </div>
            </div>
            {/* Right */}
            <div className="col-right">
              <div className="top-text">
                CleanBamboo™, the fabric of our future
              </div>
              <div className="main-text">
                Made from 100% organic bamboo, it's better for you and the
                planet.
              </div>
              <div className="center-text">
                <div className="btn">Learn more</div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section 2 */}
        {/* Best Sellers */}
        <div className="container-full">
          <div className="title">Best Sellers</div>
          <div className="best-sellers">
            <div className="flex">
              <div className="wrapper">
                <Link to="/shop/women/tops">
                  <div className="img-container">
                    <img src="/images/women/tops/1/black.jpg" alt="" />
                  </div>
                </Link>
                <div className="text">Women's top</div>
              </div>

              <div className="wrapper">
                <Link to="/shop/bed/draps">
                  <div className="img-container">
                    <img src="/images/bed/draps/1/grey.jpg" alt="" />
                  </div>
                </Link>
                <div className="text">Sheet Sets</div>
              </div>
              <div className="wrapper">
                <Link to="/shop/bath">
                  <div className="img-container">
                    <img src="/images/bath/2/grey.jpg" alt="" />
                  </div>
                </Link>
                <div className="text">Waffle Robe</div>
              </div>
              <div className="wrapper">
                <Link to="/shop/bed/duvets">
                  <div className="img-container">
                    <img src="/images/bed/duvets/4/black.jpg" alt="" />
                  </div>
                </Link>
                <div className="text">Duvet Cover</div>
              </div>
            </div>
          </div>
          {/* Best Sellers End */}
        </div>
      </div>
    </>
  );
};

export default HomePage;

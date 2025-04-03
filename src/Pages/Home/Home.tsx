import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { TypeAnimation } from "react-type-animation";

import { datas } from "../../content/home";
import FlipCard from "../../Components/Auth/Card/Card";
import useChangeOnResize from "../../hooks/useChangeOnResize";
import "../../assets/style/full-screen-page.scss";
import { useSelector } from "react-redux";

// Type for the data structure
interface SliderData {
  img: string;
  text: string;
  highlited: string;
}

// Define the Redux state structure for `useSelector`
interface RootState {
  main: {
    navHeight: number;
  };
}

const Home: React.FC = () => {
  // Get `navHeight` from Redux state
  const navHeight = useSelector((state: RootState) => state.main.navHeight);
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  
  const sliderRef = useRef<Slider | null>(null);
  const [bannerTextHeights, setBannerTextHeights] = useState<number[]>([]);
  const bannerTextRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update the banner text heights whenever necessary
  const updateBannerTextHeights = () => {
    const heights = bannerTextRefs.current.map((ref) => ref?.offsetHeight || 0);
    setBannerTextHeights(heights);
  };

  useEffect(() => {
    updateBannerTextHeights();
    // Uncomment if you need to dispatch something (like user authorization) on component mount
    // dispatch(seUserAuthorized(false));
  }, []);

  // Update banner text heights on window resize
  useChangeOnResize(updateBannerTextHeights);

  // Slider settings type-safe with the Settings type from react-slick
  const settings: Settings = {
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3600, // Slide transition duration
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) sliderRef.current.slickGoTo(index); // Go to a specific slide
  };

  return (
    <div className="container" style={{ paddingTop: navHeight + "px" }}>
      <div className="row flex-md-row-reverse vh-100">
        {!isTablet && (
          <div className="col authCard_container">
            <FlipCard />
          </div>
        )}
        <div className="col-lg-9 d-flex">
          <div className="position-relative w-100 h-100 flex_center">
            <div className="container-fluid px-0">
              <div className="row flex-md-row-reverse align-items-lg-center">
                <div className="col-lg-8">
                  <Slider {...settings} ref={sliderRef}>
                    {datas.map((item: SliderData, index: number) => (
                      <div key={index}>
                        <div>
                          <img
                            className="w-100 object-fit-cover object_top"
                            src={item.img}
                            alt={item.text}
                            style={{
                              height: isTablet
                                ? `calc(100vh - ${
                                    navHeight + 24 + (bannerTextHeights[0] || 0)
                                  }px)`
                                : "100%",
                            }}
                          />
                        </div>
                        <div
                          className="d-flex align-items-center position-absolute z_index_-1 hidden"
                          ref={(el) => (bannerTextRefs.current[index] = el)}
                        >
                          <h4 className="heading_home">
                            {item.text}{" "}
                            <span className="c_main text-capitalize">
                              {item.highlited}
                            </span>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div
                  className="col-lg-4"
                  style={{ height: `${bannerTextHeights[0]}px` }}
                >
                  <TypeAnimation
                    sequence={[
                      () => goToSlide(0),
                      datas[0].text,
                      2000,
                      () => goToSlide(1),
                      datas[1].text,
                      2000,
                      () => goToSlide(2),
                      datas[2].text,
                      2000,
                    ]}
                    wrapper="h4"
                    speed={50}
                    repeat={0}
                    className={`heading_home ${isTablet && "text-center"}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

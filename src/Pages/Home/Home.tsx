import { useMediaQuery } from "react-responsive";

import img1 from "../../assets/img/pages/home/1.png";
import FlipCard from "../../Components/Auth/Card/Card";

import "../../assets/style/full-screen-page.scss";

export default function Home() {
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <div className="container pt-3">
      <div className="row flex-md-row-reverse vh-100">
        {!isTablet && (
          <div className="col authCard_container">
            <FlipCard />
          </div>
        )}
        <div className="col-md-6 d-flex">
          <img
            className="w-100 object-fit-cover my-auto"
            src={img1}
            alt="image 1"
            title="image 1"
          />
        </div>
        <div className="col-md d-flex">
          <h4 className="heading_home my-auto">
            Do You Feel lost about your spending?
          </h4>
        </div>
      </div>
    </div>
  );
}

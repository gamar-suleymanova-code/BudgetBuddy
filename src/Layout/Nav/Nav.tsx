import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavHeight } from "../../slices/mainSlice";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import FlipCard from "../../Components/Auth/Card/Card";

interface RootState {
  authForm: {
    registerFormActive: boolean;
    authRegFormHeight: number;
    authLoginFormHeight: number;
  };
}

export default function Nav() {
  const dispatch = useDispatch();
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });

  const registerFormActive = useSelector(
    (state: RootState) => state.authForm.registerFormActive
  );
  const authRegFormHeight = useSelector(
    (state: RootState) => state.authForm.authRegFormHeight
  );
  const authLoginFormHeight = useSelector(
    (state: RootState) => state.authForm.authLoginFormHeight
  );

  useEffect(() => {
    if (navbarRef.current) {
      setTimeout(() => {
        dispatch(
          setNavHeight(
            navbarRef
            .current
            .offsetHeight
          ));
      }, 10);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <nav ref={navbarRef} className="w-100 position-fixed top-0 z_index_1">
      <div className="container-xxl pt_12px">
        <div className="row justify-content-between justify-content-lg-center">
          <div className="col-auto">
            {isTablet ? (
              <img
                className="w-auto h-100 object-fit-contain"
                src="/logo-mini.svg"
                alt="BudgetBuddy"
              />
            ) : (
              <img
                className="w-auto h-100 object-fit-contain"
                src="/logo.svg"
                alt="BudgetBuddy"
              />
            )}
          </div>
          {isTablet && (
            <div className="col-auto">
              <button
                className="default_btn text_darkBlue h4 flex_center gap-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="h5">
                  {registerFormActive ? "Register" : "Login"}
                </span>
                <FontAwesomeIcon icon={faRightToBracket} />
              </button>
              <div
                className="offcanvas offcanvas-top border-bottom-0 transition_default custom_backdrop bg-transparent"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                style={{
                  "--bs-offcanvas-height": `${
                    registerFormActive ? authRegFormHeight : authLoginFormHeight
                  }px`,
                }}
              >
                <div className="offcanvas-body p-0 overflow_unset">
                  <FlipCard />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

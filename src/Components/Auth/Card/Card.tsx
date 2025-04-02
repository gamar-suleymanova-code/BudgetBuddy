import {
    useEffect,
    useRef
} from "react";
import {
    useSelector,
    useDispatch
} from "react-redux";
import {
    useMediaQuery
} from "react-responsive";

import Header from "../Header/Header";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

import {
  setAuthRegFormHeight,
  setAuthLoginFormHeight,
} from "../../../slices/authFormSlice";

// Define the shape of the state for useSelector
interface RootState {
  authForm: {
    registerFormActive: boolean;
  };
}

export default function FlipCard() {
  const authLoginFormRef = useRef<HTMLDivElement | null>(null);
  const authRegFormRef = useRef<HTMLDivElement | null>(null);
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const dispatch = useDispatch();
  const registerFormActive = useSelector(
    (state: RootState) => state.authForm.registerFormActive
  );

  useEffect(() => {
    // Ensure refs are set before dispatching
    if (authLoginFormRef.current && authRegFormRef.current) {
      dispatch(setAuthRegFormHeight(authRegFormRef.current.offsetHeight));
      dispatch(setAuthLoginFormHeight(authLoginFormRef.current.offsetHeight));
    }
    // eslint-disable-next-line
  }, [dispatch, registerFormActive]); // Added dependency on registerFormActive to trigger the effect when it changes

  return (
    <div className={`flip-card ${registerFormActive ? "register_active" : ""}`}>
      <div className="flip-card-inner flex_center">
        <div
          ref={authLoginFormRef}
          className={`flip-card-front form_p ${
            isTablet ? "" : "rounded_18px"
          } shadow_drop bg_white w-100 d-flex flex-column gap_12px`}
        >
          <Header />
          <Form isLogin={true} />
          <Footer />
        </div>
        <div
          ref={authRegFormRef}
          className={`flip-card-back form_p ${
            isTablet ? "" : "rounded_18px"
          } shadow_drop bg_white w-100 d-flex flex-column gap_12px`}
        >
          <Header />
          <Form isLogin={false} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
